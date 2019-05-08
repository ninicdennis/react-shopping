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

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <div styleName="header-container">
          <Header />
        </div>
        <div styleName="content-container">
          <Switch>
            <Route exact path="/" component={Home} />,
            <Route exact path="/login" component={Login} />,
            <Route  exact path="/landing" component={Landing} />
            <Route exact path="/sign-out" component={SignOut} />
            <Route exact path='/about-us' component={AboutUs} />
            <Route exact path='/profile/settings' component={UserSetting} />
            <Route exact path='/items/:id' component={ItemDetail} />
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
