import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";
import * as axiosWrapper from "../../../utilities/axios/wrapper";

class LandingPage extends Component {
  constructor(props) {
  super(props);
  this.state = {
    items: [],
    itemLongText:[],
    error: true,
    
    };
  }
  componentDidMount() {
    axiosWrapper
    .get('/items')
    .then(response => {
      console.log(' response from items: ', response.data.items);
      this.setState({items: response.data.items, error: false })
    })
    .catch(err => {
      console.log('Error Fetching Items.')
      this.setState({error: true })
    });
  }
  fetchItemDesc = (event,itemDescription) => {
    event.preventDefault()
    console.log(itemDescription)
    this.setState ({ itemLongText : itemDescription })
  }


  render() {
    if (this.state.error === true) {
      return (
         <div>
          <Loader />
         </div>)
    }
    else{
        return (
      <div styleName = 'mainBody'>
        <ol styleName = 'leftSide'>
          {this.state.items.map((items, index) => {
            return (<div key = {index}
            onClick={(event) => this.fetchItemDesc(event, items.itemDesc)}> {items.itemName} </div>)
              })} 
       </ol>
       <div styleName = 'rightSide'>
         {this.state.itemLongText}
       </div>
    </div>
      )
    }
  }
}

export default protectedRoute(CSSModules(LandingPage, css));

// Add call to backend ( life cycle ) -- done
// this.setstate hard coded into back end -- done
// render should draw the items --done
  // If statement to draw if we have the data or not
// create backend --done
  // console log a bunch of stuff out
  // use docker logs project-api
// return whatever is given, an array of objects to be drawn on screen --done
// business logic -- done
  //this is used as a switch just to change the state   
// if ( 2%2===0) { 
    // return this
  //
 