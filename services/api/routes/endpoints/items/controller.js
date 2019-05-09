import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { fetchItemDetails } from '../../commands/items';
import { fetchItem } from '../../commands/items';
import {fetchSellerInfo} from '../../commands/items';

 export default class ItemsController{
   constructor(router) {
      router.get('/', wrapAsyncFunc(this.sendItems));
      router.get("/:id", wrapAsyncFunc(this.getItemDetails));
      router.get('/:id', wrapAsyncFunc(this.getSellerInfo));
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

   async fetchSellerInfo(req,res) {
      const { id } = req.params
      const seller = await fetchSellerInfo(id);
      res.send({seller})
   }
}
