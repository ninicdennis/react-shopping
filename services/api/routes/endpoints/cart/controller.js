import { fetchCart } from "../../commands/cart"
import { wrapAsyncFunc } from "../../../utils/wrap-async-route";


export default class AuthController {
   constructor(router) {
      router.get("/", wrapAsyncFunc(this.fetchCartInfo));
   }

   async fetchCartInfo(req,res) {
      const { creator  } = await fetchCart();
      res.send({ creator });
   }

}