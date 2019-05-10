import { fetchSellerDB, fetchSellerDetailsFromDB } from '../repositories/sellers';

export async function fetchSeller () {
   console.log("Fetching some items")
   const results = await fetchSellerDB()
   return results
}
export async function fetchSellerInfo(seller_id) {
   //business logic//
         const results = await fetchSellerDetailsFromDB(seller_id)
         return results
      }
