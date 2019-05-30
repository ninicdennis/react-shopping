// import omit from 'lodash/omit'
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CSSModules from "react-css-modules";
import axiosWrapper from "../../utilities/axios/wrapper"

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

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cartCount: 0
    }
  }

  componentDidMount() {
    axiosWrapper.get('/cart')
      .then((response) => {
        console.log("Response from cart items: ", response)
        this.setState({cartCount : response.data}) // this will be number of items in cart, quantity
      })
      .catch((err) => {
        console.log("Error: ", err)
      })
  }

  updateCart = () => {
    console.log("UPDATING IN APP.JS")
    this.setState({cartCount : this.state.cartCount + 1})

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
            <Route exact path='/cart' render ={() => <div>This should be the Cart</div>} />
            {/* <Route exact path='/items/:id' component={ItemDetail} /> */}
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
