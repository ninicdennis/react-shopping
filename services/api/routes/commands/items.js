import {ErrorWithStatus} from '../../utils/errors'

export async function createItem (item) {
   console.log('new item created: ', item)
   if(!item) {
      throw new ErrorWithStatus({msg:'Please provide an item', status: 400})
   }

   //call the repo :^)
}

export async function fetchItem () {
   console.log("Fetching some items")
}