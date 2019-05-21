import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import css from './index.css'

class UserSetting extends Component {
  render() {
   return (
      <div styleName = 'container'>
         Adjust your information:
         <div styleName = 'textField'>
            <form>
            <input  type= 'text' placeholder = 'First Name' input_id = '' />
            <input  type = 'text' placeholder = 'Last Name' value = '' />
            <button>Submit </button>
            </form>
            
         </div>
      </div>
      
   )
  }
}

export default CSSModules(UserSetting, css)