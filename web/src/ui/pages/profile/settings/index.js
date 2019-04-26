import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import css from './index.css'

class UserSetting extends Component {
  render() {
   return (
      <div>
         Hello! This is the Settings Page, a page where you can adjust user information!
         <div>

            Username: 
            <input type = 'text' placeholder = 'username'/>
            <div />
            Password: 
            <input type = 'text' placeholder = 'password' />
            
         </div>
      </div>
   )
  }
}

export default CSSModules(UserSetting, css)