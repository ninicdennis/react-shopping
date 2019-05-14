import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { protectedRoute } from "../../../process/users/auth";

import * as axiosWrapper from "../../../utilities/axios/wrapper";

import css from './index.css'

class ProfilePage extends Component {
   // constructor(props){
   //    super(props);
   //    this.state = {
   //       userName: ''
   //    }
   // }

   // componentDidMount() {
   //    axiosWrapper.get("/users")
   //    .then(response =>{
   //       console.log(response.data)
   //    })
   //    .catch(err => {
   //       console.log(err)
   //    })
   // }
  render() {
     let user = 'Pupperbot'  //placeholder for login on backend
   return (
      <div>
         <div styleName = 'top'>Hello, {user}</div>
         <div styleName = 'top'>Recent Purchases:</div>
         <div styleName = 'orderTab'>
            <p>Item</p>
            <p>Item Price</p>
            <p>Order Number</p>
            <p>Seller Name</p>
            <p>Date of Order</p>
         </div>
      </div>
   )
  }
}

export default protectedRoute(CSSModules(ProfilePage, css));