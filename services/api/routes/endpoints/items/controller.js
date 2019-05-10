import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { fetchItemDetails } from '../../commands/items';
import { fetchItem } from '../../commands/items';

 export default class ItemsController{
   constructor(router) {
      router.get('/', wrapAsyncFunc(this.sendItems));
      router.get("/:id", wrapAsyncFunc(this.getItemDetails));
   }

   async sendItems(req, res) {
      console.log('fetching items')
      const items = await fetchItem()
      res.send({ items })
   }
   async getItemDetails(req, res) {
      const { id } = req.params
      const item = await fetchItemDetails(id);
      res.send({ item })
   }
 }
