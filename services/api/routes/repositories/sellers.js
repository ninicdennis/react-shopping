import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const sellerInfoDTO = row => ({
  sellerHandle: row.seller_handle,
  sellerInfo: row.information,
  sellerUsername: row.seller_username,
});

export async function fetchSellerDB() {
   const query = sql`select * from sellers`;
   return (await PGWrapper.sqlAndMap(query, sellerInfoDTO));
}