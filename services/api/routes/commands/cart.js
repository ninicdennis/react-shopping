import { fetchCartDB } from '../repositories/cart';
import { addItemsDB } from '../repositories/cart'
export async function fetchCart () {


   console.log("Fetching some items")
   const results = await fetchCartDB()
   return results
}

export async function addItemToCart (userHandle, items) {
   console.log("Adding item to the cart..........", userHandle, items)
   const results = await addItemsDB(userHandle, items)
   return results

}
