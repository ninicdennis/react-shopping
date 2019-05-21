import React, { Component } from "react";
import CSSModules from "react-css-modules";
import css from "./index.css";
import { arrayOf, string, shape  } from 'prop-types'
import {Link} from 'react-router-dom'
class ReMap extends Component {
   static proptypes = {
      items: arrayOf(
         shape({
            firstName:string.isRequired
         })
      )
   }
  render() {
     if(!this.props.creators)
      return <div>loading...</div>

    return this.props.creators.map((items,index) => 
    <li key = {index}>
      {this.props.children}
    </li>
    )
  }
}

export default CSSModules(ReMap, css);



