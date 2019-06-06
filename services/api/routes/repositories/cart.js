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
   const statement = sql`insert into cart values (${userHandle}, ${item.id}, true, ${item.quantity})
   on conflict on constraint cart_pkey
   do update set quantity = excluded.quantity, active = true returning *;`

   await PGWrapper.sql(statement);
   const query = sql`select sum(quantity) as count from cart where user_handle = ${userHandle} and active = true;`

   const results = await PGWrapper.sqlAndMap(query)
      return results[0]

         // insert into cart (user_handle,item_handle, active, quantity ) values ("037b4897-8a2a-46b6-8ed7-47a555bb40f2", ​"81d9bb8b-ae94-4067-8c82-f18e2a1cf3dd", true, 1)
         // on conflict (user_handle , item_handle, active) do update set quantity = 2, active = true
         // returning(sum(quantity) as count from cart where user_handle = "037b4897-8a2a-46b6-8ed7-47a555bb40f2" and active = true);
   
}

 