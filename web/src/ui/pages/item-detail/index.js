import React, { Component } from "react";
import CSSModules from "react-css-modules";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import { protectedRoute } from "../../../process/users/auth";

import { Image, Container, Header, Label } from 'semantic-ui-react'


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
         <Image 
         src='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fmale-left-foot-brown-shoe-takes-step-isolated-white-background-65135996.jpg&f=1'
         size='medium' />
         
         <div styleName = 'desctag'>
           <Label>Price: {itemDetails.itemPrice}</Label>
           <Label>Ratings: {itemDetails.itemPrice}</Label>
           <Label>Seller: {sellerInfo.sellerUsername}</Label>
         </div>
        <Container text>
          <Header as='h2'>Description: </Header>
          <p>{itemDetails.itemDesc}</p>
          </Container>

      </div> 
    );
  }
}

export default protectedRoute(CSSModules(ItemDetail, css));
