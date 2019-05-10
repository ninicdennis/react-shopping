import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { fetchSeller } from "../../commands/sellers";

 export default class SellerController{
   constructor(router) {
      router.get('/', wrapAsyncFunc(this.sendSeller));
   }

   async sendSeller(req, res) {
      console.log('fetching items')
      const seller = await fetchSeller()
      res.send({ seller })
   }
 }