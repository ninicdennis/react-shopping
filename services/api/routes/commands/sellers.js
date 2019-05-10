import { fetchSellerDB } from '../repositories/sellers';

export async function fetchSeller () {
   console.log("Fetching some items")
   const results = await fetchSellerDB()
   return results
}