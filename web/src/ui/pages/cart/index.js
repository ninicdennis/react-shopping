import React, { Component } from "react";
import CSSModules from "react-css-modules";
import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";

class CartCart extends Component {
  render(){
     return (
      <div>
         Hello!
      </div>
      )
    }
  }


export default protectedRoute(CSSModules(CartCart, css));


// This is for the backend as sort of a failsafe in case the transaction is bad or goes wrong
// It will automatically populate with a sort of fake table with some information depending on 
// where it went wrong. This will not work in my situation as I completely screwed my order_items
// table comparing this.... Whoops :^)

// This should also go into the cart repository...

// BEGIN;                                            can be user_handle as well
//   with new_order as (                           VVV  
//     insert into orders (buyer_handle) value ({buyer_uuid}) returning * 
//   )
//   insert into order_items (
//     select new_order.order_id as order_id, c.item_id, c.quantity
//     from cart c
//     left join new_order on new_order.buyer_handle = c.user_handle
//     where c.user_handle = {user_uuid} and c.active = true;
//   );
//   update cart set active = false where user_handle = {user_uuid} and active = true;
// COMMIT;