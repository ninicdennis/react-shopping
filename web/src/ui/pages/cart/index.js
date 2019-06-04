import React, { Component } from "react";
import CSSModules from "react-css-modules";
import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";

class CartCart extends Component {
  render(){
     return (
      <div>
         Hello!
      </div>
      )
    }
  }


export default protectedRoute(CSSModules(CartCart, css));
