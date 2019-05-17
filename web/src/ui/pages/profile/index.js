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

   // To get the userID for specific logged in person
   // this.props.user.active

   componentDidMount() {
      axiosWrapper.get("/orders")
      .then(response =>{
         console.log('response Order: ',response.data)
         this.setState({orders : response.data.orders})
         console.log('Absolte state' ,this.state)
         console.log('res.state to get ID', this.props.user.active.userHandle)
      })
      .catch(err => {
         console.log('Error: ',err)
      })
   }
  render() {
     let { orders } = this.state;
     let  current_user  = this.props.user.active
   return (
      <div>
         <div styleName = 'top'>Hello, {current_user.firstName} {current_user.lastName}</div>
         <div styleName = 'top'>Recent Purchases:</div>
          <div>
          <table styleName = 'orderTab'>
             <tr styleName = 'tableRow'>
               <th styleName = 'tableHead2'>Item</th>
               <th styleName = 'tableHead2'>Item Ordered</th>
               <th styleName = 'tableHead2'>Item Seller</th>
               <th styleName = 'tableHead2'> Order Number</th>
               <th styleName = 'tableHead2'>Price</th>
            </tr>

             {orders.map((order, index) => (
                <tr key = {index} styleName = 'tableRow'>
                   <th styleName = 'tableHead'>{order.orderItem}</th>
                   <th styleName = 'tableHead'>{order.orderDate}</th>
                   <th styleName = 'tableHead'>{order.orderSeller}</th>
                   <th styleName = 'tableHead'>{order.orderNumber}</th>
                   <th styleName = 'tableHead'>{order.orderPrice}</th>
                </tr>))}
              </table>
          </div>
      </div>
      )
  }
}

export default protectedRoute(CSSModules(ProfilePage, css));


// the second orderTab with the JS, that is where you would put a for loop in order to loop thru and draw them automatically instead of putting them in one at a time.