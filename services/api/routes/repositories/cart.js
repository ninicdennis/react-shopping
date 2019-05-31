import sql from "sql-template-strings"
import PGWrapper from "../../utils/pg-wrapper"

const OrderMap = row => ({
   userHandle : row.user_handle,
   itemHandle : row.item_handle,
   active : row.active,
   quantity : row.quantity,

})

export async function fetchCartDB() {
   const query = sql `select * from cart`; 
   return (await PGWrapper.sqlAndMap(query,OrderMap));
}