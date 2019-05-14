import React, { Component } from "react";
import CSSModules from "react-css-modules";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import { protectedRoute } from "../../../process/users/auth";


class ItemDetail extends Component {
   constructor(props) {
      super(props);
      this.state = {
         itemDetails : {},
         sellerInfo : {}
         //itemName
         //itemDesc
         //itemPrice
         //itemHandle
         //ratings
      }
   }
   componentDidMount() {
     axiosWrapper.get(`/items/${this.props.match.params.id}`)
     .then(response => {
       console.log("Item Information from backend. ", response)
       this.setState({itemDetails : response.data.item})
     })
     .catch(err => {
      console.log("Error: ",err)
     });
     const foobar = this.props.match.params.id
     axiosWrapper.get(`/sellers/${foobar}`)
     .then(response => {
       console.log('Seller Information from backend: ', response )
       this.setState({sellerInfo: response.data.seller[0]})
     })
     .catch(err => {
       console.log('Error: ',err)
     })
   }

  render() {
     const { itemDetails } = this.state;
     const { sellerInfo } = this.state;
   return (
      <div styleName = 'left-desc'>
         <h3 styleName = 'maintag'>{itemDetails.itemName}</h3>
         <div styleName = 'imagePlaceholder'>IMAGE GOES HERE</div>
         <div styleName = 'desctag'>
         <p>Price: {itemDetails.itemPrice}</p>
         <p>Ratings: {itemDetails.ratings}</p>
         <p>Seller: {sellerInfo.sellerUsername}</p>
         </div>
         <p styleName = 'desctagRight'>Description: {itemDetails.itemDesc}</p>
      </div> 
    );
  }
}

export default protectedRoute(CSSModules(ItemDetail, css));
