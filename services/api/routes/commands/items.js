import {StatusError} from '../../utils/errors'
import { fetchItemsFromDB } from '../repositories/items'

let loggedIn = true

export async function createItem (item) {
   console.log('new item created: ', item)
   if(!item) {
      throw new StatusError({msg:'Please provide an item', status: 400})
   }

   //call the repo :^)
}

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