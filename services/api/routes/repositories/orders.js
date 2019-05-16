import sql from "sql-template-strings"
import PGWrapper from "../../utils/pg-wrapper"

const OrderMap = row => ({
   orderItem : row.item_name,
   orderDate : row.order_date,
   orderSeller : row.seller_name,
   orderNumber : row.order_number,
   orderPrice : row.item_price,

})

export async function fetchOrderFromDB() {
   const query = sql `select * from orders`;  // you can put an ID to pull everyone, TODO
   return (await PGWrapper.sqlAndMap(query,OrderMap));
}