import React, { Component } from "react";
import CSSModules from "react-css-modules";

import autoLogin from "../../../process/users/auth/auto-login";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creators: [],
      creator: {}
    };
  }
  componentDidMount() {
    axiosWrapper
      .get("/creators")
      .then(response => {
        console.log("creators response", response.data.creators);
        this.setState({ creators: response.data.creators});
      })
      .catch(err => {
        console.log("Error");
      });
    }

  fetchUserInfo = (event, userhandle, ) => {
    event.preventDefault()
    console.log('you clicked on', userhandle)
    axiosWrapper
    .get(`/creators/${userhandle}`)
    .then(response => {
      console.log("creators response", response);
      this.setState({ creator: response.data.creator});
    })
    .catch(err => {
      console.log("Error on picking up ID");
    });
  }

  renderSpotlight = () => {
    const { creator } = this.state;
    if(creator && creator.firstName){
      return (
        <div>
          <div>{creator.firstName} {creator.middleName} {creator.lastName}</div>
          <div>Email: {creator.email}</div>
          <div> Joined: {creator.joined}</div>
          <div>Username: {creator.username}</div>
        </div>
        )
    }
  return null
  }

  render() {
    return (
      <div styleName = 'container'>
          <aside styleName = 'leftSide'>
                Creators:
              <ol>
              {this.state.creators.map((creator, index) => {
                return <li key = {index}
                 onClick={(event) => this.fetchUserInfo(event, creator.userHandle)}>
                 {creator.firstName} {creator.lastName}</li>
              })} 
                </ol>
          </aside>
          <aside styleName = 'rightSide'>
              More info:
              {this.renderSpotlight()}
          </aside>
      </div>
    );
  }
}

export default autoLogin(CSSModules(AboutUs, css));