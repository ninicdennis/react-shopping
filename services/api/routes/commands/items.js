import {StatusError} from '../../utils/errors'

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
      return [{itemName:'a boot', itemDesc: 'its a boot.'},
      {itemName:'nice boots', itemDesc: 'it is a fancier boot.'},
      {itemName:'old boots', itemDesc: 'its an old boot.'},
      {itemName: 'small boots', itemDesc: 'its a small boot.'}]
   }
   else {throw new StatusError({msg:'Please log in!', status: 400})}
}