import React, { Component } from "react";
import CSSModules from "react-css-modules";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";

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
     axiosWrapper.get('/sellers')
     .then(response => {
       console.log('Seller Information from backend: ', response )
       this.setState({sellerInfo: response.data.seller[0]})
     })
     .catch(err => {
       console.log('Error: ',err)
     })
   }

  render() {
    console.log('meme:' ,this.state)
     const { itemDetails } = this.state;
     const { sellerInfo } = this.state;
   return (
      <div styleName = 'left-desc'>
         <p styleName = 'maintag'>{itemDetails.itemName}</p>
         <p styleName = 'desctag'>Price: {itemDetails.itemPrice}</p>
         <p styleName = 'desctag'>Description: {itemDetails.itemDesc}</p>
         <p styleName = 'desctag'>Ratings: {itemDetails.ratings}</p>
         <p styleName = 'desctag'>Seller: {sellerInfo.sellerUsername} </p>
      </div> 
    );
  }
}

export default CSSModules(ItemDetail, css);
