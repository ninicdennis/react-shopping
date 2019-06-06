import { fetchCart } from "../../commands/cart"
import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { addItemToCart } from '../../commands/cart'


export default class AuthController {
   constructor(router) {
      router.get("/", wrapAsyncFunc(this.fetchCartInfo));
      router.get('/:userhandle', wrapAsyncFunc(this.fetchCartForUser));
      router.post('/add', wrapAsyncFunc(this.addCartItem));
   
   }

   async fetchCartInfo(req,res) {
      const cart = await fetchCart();
      res.send({cart});
   }

   async addCartItem(req,res) {
      const {userHandle} = req.user
      const {items} = req.body
      console.log("hello!.........", req.user)
      console.log("Req.Body.........", req.body)
      const results = await addItemToCart(userHandle, items);
      res.send({cart: results})
   }
   
   async fetchCartForUser(req,res) {
      console.log('Here are the terms : -U req.user.userHandle -I req.body.items[0].id')
   }
}
