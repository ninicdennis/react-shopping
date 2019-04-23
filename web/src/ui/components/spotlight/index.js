import React, { Component } from "react";
import CSSModules from "react-css-modules";

import autoLogin from "../../../process/users/auth/auto-login";
import css from "./index.css";

class Spotlight extends Component {
    render() {
      const { creator, updatedCreator } = this.props;
      if(creator && creator.firstName){
        return (
          <div>
            <div>{creator.firstName} {creator.middleName} {creator.lastName}</div>
            <div>Email: {creator.email}</div>
            <div>Joined: {creator.joined}</div>
            <div>Username: {creator.username}</div>
            <div>Update:</div>
  
            <form onSubmit={event => this.props.submitCreatorUpdate(event, creator.userHandle)}>
              <input  
                type='text'
                value={updatedCreator.firstName} 
                placeholder='First Name' 
                onChange={this.props.updateCreator} />
              
              <button 
                type='submit' 
                onClick={event => this.props.submitCreatorUpdate(event, creator.userHandle)}>
                  Update Information</button>
            </form>
          </div>
          )
      }
    return null;
    }
}

export default autoLogin(CSSModules(Spotlight, css))