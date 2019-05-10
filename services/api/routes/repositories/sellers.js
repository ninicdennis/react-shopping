import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const sellerInfoDTO = row => ({
  sellerHandle: row.seller_handle,
  sellerInfo: row.information,
  sellerUsername: row.seller_username,
  itemForSale: row.item_selling,
});

const sellerSpecific = row => ({
   sellerUsername: row.seller_username,
   itemForSale: row.item_selling,
})

export async function fetchSellerDB() {
   const query = sql`select * from sellers`;
   return (await PGWrapper.sqlAndMap(query, sellerInfoDTO));
}
export async function fetchSellerDetailsFromDB(seller_id) {
   console.log('calling db for item', seller_id)
   const query = sql`select * from sellers where item_selling = ${seller_id}`;
   const results = await PGWrapper.sqlAndMap(query, sellerSpecific)
   return results;
 }