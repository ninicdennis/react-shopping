import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { protectedRoute } from "../../../process/users/auth";

import * as axiosWrapper from "../../../utilities/axios/wrapper";

import css from './index.css'

class ProfilePage extends Component {
   constructor(props){
      super(props);
      this.state = {
         orders : []
         //orderItem
         //orderDate
         //orderSeller
         //orderNumber
         //orderPrice
      }
   }

   componentDidMount() {
      axiosWrapper.get("/orders")
      .then(response =>{
         console.log('response Order: ',response.data)
         this.setState({orders : response.data.orders})
         console.log('Absolte state' ,this.state)
      })
      .catch(err => {
         console.log('Error: ',err)
      })
   }
  render() {
     let user = 'Pupperbot'  //placeholder for login on backend
     let { orders } = this.state;
   return (
      <div>
         <div styleName = 'top'>Hello, {user}</div>
         <div styleName = 'top'>Recent Purchases:</div>
         <div styleName = 'orderTab'>
            <p>Item</p> {console.log(orders)}
            <p>Date Ordered</p>
            <p>Item Seller</p>
            <p>Order Number</p>
            <p>Price</p>
         </div>
 
          <div>
             {orders.map((order, index) => (
                <div key = {index}>
                <p styleName = 'orderTab2'>
                <div>{order.orderItem}</div>
                <div>{order.orderDate}</div>
                <div>{order.orderSeller}</div>
                <div>{order.orderNumber}</div>
                <div>{order.orderPrice}</div>
                  </p>
                </div>
                ))}
          </div>
      </div>
      )
  }
}

export default protectedRoute(CSSModules(ProfilePage, css));


// the second orderTab with the JS, that is where you would put a for loop in order to loop thru and draw them automatically instead of putting them in one at a time.