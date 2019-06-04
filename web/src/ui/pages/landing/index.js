import React, { Component } from "react";
import CSSModules from "react-css-modules";
import {Link} from 'react-router-dom'

import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";
import * as axiosWrapper from "../../../utilities/axios/wrapper";

class LandingPage extends Component {
  constructor(props) {
  super(props);
  this.state = {
    items: [],
    error: true,
    
    };
  }
  componentDidMount() {
    axiosWrapper.get('/items')
    .then(response => {
      console.log(' response from items: ', response.data.items);
      this.setState({items: response.data.items, error: false })
    })
    .catch(err => {
      console.log('Error Fetching Items.', err)
      this.setState({error: true })
    });
  }

  render(){
    const { items } = this.state;
    if (this.state.error)
      return <div>Loading...</div>
     return (
      <div styleName = 'innerSite'>
        {items.map((item, index) => (
          <Link styleName = 'itemBoxes' to={`/items/${item.itemHandle}`} key = {index}>
          <div key = {index}>{item.itemName}</div>
          </Link>
        ))}
      </div>
      )
    }
  }


export default protectedRoute(CSSModules(LandingPage, css));
