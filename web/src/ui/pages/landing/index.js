import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { Loader } from 'semantic-ui-react'

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

  render(){
    const { items } = this.state;
     return (
      <div>
        {items.map((item, index) => (
          <div key = {index}>
          <Link to={`/items/${item.itemHandle}`}>{item.itemName}</Link>
          </div>
        ))}
      </div>
      )
    }
  }


export default protectedRoute(CSSModules(LandingPage, css));
