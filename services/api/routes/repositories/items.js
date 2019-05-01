import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const itemMapper = row => ({
  itemHandle : row.item_handle,
  itemName : row.item_name,
  itemDesc : row.item_desc,
  itemPrice : row.price,
  ratings : row.ratings,
});

export async function fetchItemsFromDB() {
  const query = sql`select * from items`;
  return (await PGWrapper.sqlAndMap(query, itemMapper));
}