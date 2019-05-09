import React, { Component } from "react";
import CSSModules from "react-css-modules";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";

class ItemDetail extends Component {
   constructor(props) {
      super(props);
      this.state = {
         itemDetails : {}
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
       console.log("Detail: ", response)
       this.setState({itemDetails : response.data.item})
     })
     .catch(err => {
      console.log("Failure: ",err)
     });
   }
  render() {
     const { itemDetails } = this.state;
     console.log(this.state)
     console.log(this.props.match.params.id)
    return (
      <div styleName = 'left-desc'>
         <p styleName = 'maintag'>{itemDetails.itemName}</p>
         <p styleName = 'desctag'>Price: {itemDetails.itemPrice}</p>
         <p styleName = 'desctag'>Description: {itemDetails.itemDesc}</p>
         <p styleName = 'desctag'>Ratings: {itemDetails.ratings}</p>
         <p styleName = 'desctag'>Seller: </p>
      </div> 
    );
  }
}

export default CSSModules(ItemDetail, css);
