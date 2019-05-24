/* eslint-disable no-console */
import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";


import css from "./index.css";

class Footer extends Component {
  render() {
    return <footer styleName="footer">

<Link to="/about-us">About Us</Link>
    </footer>;
  }
}

export default CSSModules(Footer, css);
