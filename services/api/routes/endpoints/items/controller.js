import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { createItem } from '../../commands/items';
import { fetchItem } from '../../commands/items';

 export default class ItemsController{
   constructor(router) {
      router.get('/', wrapAsyncFunc(this.sendItems));

      router.put("/:id", wrapAsyncFunc(this.createNewItem));
   }

   async sendItems(req, res) {
      console.log('fetching items')
      const items = await fetchItem()
      res.send({ items })
   }
   async createNewItem(req, res) {
      console.log('hello!')
      const { item } = req.body
      const results = await createItem(item);
      res.send({ results })
   }

}
