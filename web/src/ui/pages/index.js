// import omit from 'lodash/omit'
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CSSModules from "react-css-modules";

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
      updateCartItem: {},
      cartCount: 0
    }
  }

  updateCart = (event) => {
    event.preventDefault();
    this.setState({cartCount : cartCount + 1})

  }
  // This is where the good or bad path. 

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
            {/* <Route exact path='/items/:id' component={ItemDetail} /> */}
            <Route exact path = '/items/:id' render={({match}) => <ItemDetail match = {match} cartCount = {this.state.cartCount}/>} />
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
