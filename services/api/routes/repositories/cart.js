import sql from "sql-template-strings"
import PGWrapper from "../../utils/pg-wrapper"

const OrderMap = row => ({
   quantity : row.quantity,
})

const CartRow = (row) => ({
   quantity : row.count,

})

export async function fetchCartDB() {
   const query = sql `select * from cart`; 
   return (await PGWrapper.sqlAndMap(query,OrderMap))[0];
}

export async function addItemsDB(userHandle, items) {
   const item = items[0]
   const statement = sql`insert into cart (user_handle, item_handle, active, quantity ) values (${userHandle}, ${item.id}, true, ${item.quantity})
   on conflict (user_handle, item_handle, active) do update  set quantity = 2 , active = true returning (sum(quantity) as count from cart where user_handle = ${userHandle} and active = true);`

      return (await PGWrapper.sqlAndMap(statement,CartRow))

   
}

 