import {fetchOrderFromDB} from '../repositories/orders'

export async function fetchOrder() {
   const results = await fetchOrderFromDB()
   return results
}