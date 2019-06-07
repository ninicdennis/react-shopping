import { Pool } from 'pg'

class PGWrapper {
  _pool
  _pgQueue

  constructor() {
    this._pool = null
    this._pgQueue = []
    this.setup()
  }

  setup() {
    if (this._pool) {
      console.warn('PG Wrapper already initialized.')
      return
    }
    this._pool = new Pool({
      connectionString: process.env.DATABASE_URL
    })
  }

  async shutdown() {
    if (!this._pool) {
      console.warn('PG Wrapper has not been initialized, nothing to shutdown.')
      return
    }

    while (this._pgQueue.length > 0)
      setTimeout(() => console.warn('Waiting for postgres to finish before closing...'), 100)

    await this._pool.end()
  }

  poolStatus(status, message) {
    const check = this._pool === status
    check ? console.warn(message) : null
    return !check
  }

  execute(query, params, mapper = null) {
    return new Promise((resolve, reject) => {
      this._pool.query(query, params)
        .then((result) => {
          if (mapper) return resolve(mapper(result))
          return resolve(result.rows[0])
        })
        .catch(err => {
          return reject(new Error(`PostgresWrapper Error: ${err}, Query: ${query} Params: ${params}`))
        })
    })
  }

  logError(errorParams) {
    const { err, method, params, query } = errorParams
    console.error(`Failed to execute postgres ${method} query: ${query} Params: ${params}`, err)
    throw new Error(`PG Wrapper error 500`)
  }

  async sql(statement) {
    try {
      this._pgQueue.push(true)
      const result = await this.execute(statement.text, statement.values)
      this._pgQueue.pop()
      return result
    } catch (errParams) {
      this._pgQueue.pop()
      this.logError(errParams)
    }
  }
  async sqlTransaction(...statements) {
    const pool = new Pool({
    connectionString: process.env.DATABASE_URL
    });
    return (async () => {
    // note: we don't try/catch this because if connecting throws an exception
    // we don't need to dispose of the client (it will be undefined)
    const client = await pool.connect();
    try {
    let results;
    statements.map(async (statement, index) => {
    try {
    results = await client.query(statement.text, statement.values);
    } catch (e) {
    console.log("Your statment has an error in it", e);
    }
    });
    await client.query("COMMIT");
    return results;
    } catch (e) {
    await client.query("ROLLBACK");
    throw e;
    } finally {
    client.release();
    }
    })().catch(e => console.error(e.stack));
    }

  async sqlAndMap(statement, mapper) {
    this._pgQueue.push(true)

    const resultMapper = (result) => ({
      rows: result.rows && result.rows.map(mapper),
      rowCount: result.rowCount
    })

    try {
      this._pgQueue.push(true)
      const results = await this.execute(statement.text, statement.values, resultMapper)
      this._pgQueue.pop()
      return results.rows
    } catch (errParams) {
      this._pgQueue.pop()
      this.logError(errParams)
    }
  }
}

const db = new PGWrapper()
export default db
