import {StatusError} from '../../utils/errors'
import { fetchItemsFromDB } from '../repositories/items'
import { fetchItemDetailsFromDB } from '../repositories/items'

let loggedIn = true

export async function fetchItem () {
   console.log("Fetching some items")
   if(loggedIn) {
      try {
         const results = await fetchItemsFromDB()
         return results
      }catch (err) {
         //bad result
         throw new StatusError({msg:'DB error', status: 500})
      }
   }
   else {throw new StatusError({msg:'Please log in!', status: 400})}
}

export async function fetchItemDetails(id) {
   //business logic//
         const item = await fetchItemDetailsFromDB(id)
         return item
      }
   


