import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { createItem, } from '../../commands/items';
import { fetchItems } from '../../commands/items';

 export default class ItemsController{
   constructor(router) {
      router.get('/', wrapAsyncFunc(this.fetchItems));
      router.put("/:id", wrapAsyncFunc(this.createNewItem));
   }

   async fetchItems(req, res) {
      console.log('fetching items')
      let items = [{itemName:'boot', itemDesc: 'its a boot.'},{itemName:'nice boots', itemDesc: 'it is a fancier boot.'}]
      res.send({ items })
   }
   async createNewItem(req, res) {
      console.log('hello!')
      const { item } = req.body
      const results = await createItem(item);
      res.send({ results })
   }

}
