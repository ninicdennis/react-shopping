import { fetchCartDB } from '../repositories/cart';

export async function fetchCart () {
   console.log("Fetching some items")
   const results = await fetchCartDB()
   return results
}