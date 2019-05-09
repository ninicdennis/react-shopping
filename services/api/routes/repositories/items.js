import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const itemMapper = row => ({
  itemHandle : row.item_handle,
  itemName : row.item_name,
  itemPrice : row.price,
});

const itemDetailMapper = row => ({
  itemHandle : row.item_handle,
  itemName : row.item_name,
  itemDesc : row.item_desc,
  itemPrice : row.price,
  ratings : row.ratings,
});

const SellerInformationDTO = row => ({
  userHandle : row.user_handle,
})

export async function fetchItemsFromDB() {
  const query = sql`select * from items`;
  return (await PGWrapper.sqlAndMap(query, itemMapper));
}

export async function fetchItemDetailsFromDB(id) {
  console.log('calling db for item', id)
  const query = sql`select * from items where item_handle = ${id}`;
  const results = await PGWrapper.sqlAndMap(query, itemDetailMapper)
  return results[0];
}

export async function fetchSellerFromDB(id) {
  const query = sql`select * from users, sellers where user_handle = seller_handle`;
  return (await PGWrapper.sqlAndMap(query, SellerInformationDTO));
}

//set id to where user will match with item, sellerhandle = userhandle = id of item for sale. 