import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { fetchSeller, fetchSellerInfo } from "../../commands/sellers";

 export default class SellerController{
   constructor(router) {
      router.get('/', wrapAsyncFunc(this.sendSeller));
      router.get('/:seller_id', wrapAsyncFunc(this.sendSellerInfo));
   }

   async sendSeller(req, res) {
      console.log('fetching items')
      const seller = await fetchSeller()
      res.send({ seller })
   }

   async sendSellerInfo(req, res) {
      const { seller_id } = req.params
      const seller = await fetchSellerInfo(seller_id);
      res.send({ seller })
   }
 }