import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { fetchOrder } from '../../commands/orders'

export default class OrderController{
constructor(router) {
   router.get('/', wrapAsyncFunc(this.sendOrder));
}
async sendOrder(req, res) {
   console.log('getting order')
   const orders = await fetchOrder()
   res.send( orders[0] ) // figure out why this is always saves an array.
}

}