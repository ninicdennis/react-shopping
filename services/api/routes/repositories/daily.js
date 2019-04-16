import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

export async function fetchMessage(id) {
  const query = sql`select * from daily_messages where id = ${id};`;

  const message = await PGWrapper.sqlAndMap(query, row => ({
    id: row.id,
    dailyMessage: row.daily_message
  }));

  return message[0];
}
