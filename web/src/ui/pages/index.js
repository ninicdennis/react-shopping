// import omit from 'lodash/omit'
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../utilities/axios/wrapper"

import css from "./index.css";
import Header from "../components/header";
import Footer from "../components/footer";

import AboutUs from "./about-us";
import Landing from "./landing";
import Home from "./homepage/";
import Login from "./login/";
import SignOut from './sign-out'
import UserSetting from './profile/settings/index'
import ItemDetail from "./item-detail";
import ProfilePage from './profile/index'
import CartCart from './cart'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cartCount: 1,
      cartInv: []

    }
  }

  componentDidMount() {
    axiosWrapper.get('/cart')
      .then(response => {
        console.log("Response from cart items: ", response.data.cart.quantity)
        this.setState({cartCount : response.data.cart.quantity, cartInv : response.data}) // this will be number of items in cart, quantity
        console.log('Cart..........' , response.data)
      })
      .catch(err => {
        console.log("Error: ", err)
      })
  }

  updateCart = (itemID, quantity) => {
    axiosWrapper.post('/cart/add', {items: [{id: itemID, quantity }]})
    .then(res => {
        console.log("Backend Response for cart..........", res)
        this.setState ({cartCount : parseInt(this.state.cartCount) + 1})
    })
    .catch((err) => {
      console.log("Something has broken..........", err)
    })


  }
  render() {

    return (
      <div styleName="App">
        <div styleName="header-container">
          <Header cartCount = {this.state.cartCount} />
        </div>
        <div styleName="content-container">
          <Switch>
            <Route exact path="/" component={Home} />,
            <Route exact path="/login" component={Login} />,
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/sign-out" component={SignOut} />
            <Route exact path='/about-us' component={AboutUs} />
            <Route exact path='/profile/settings' component={UserSetting} />
            <Route exact path='/cart' render ={() => <CartCart />} />
            <Route exact path = '/items/:id' render={({match}) => <ItemDetail match = {match} cartCount={this.updateCart}/>} />
            <Route exact path='/profile' component={ProfilePage} />
          </Switch>
        </div>
        <div styleName="footer-container">
          <Footer />
        </div>
      </div>
    );
  }
}

export default CSSModules(App, css);
