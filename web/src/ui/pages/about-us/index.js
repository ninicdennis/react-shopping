import React, { Component } from "react";
import CSSModules from "react-css-modules";

import autoLogin from "../../../process/users/auth/auto-login";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";

class AboutUs extends Component {
  state = {
    creators:""
  }

  constructor(props) {
    super(props);
    this.state = {
      creators: []
    };
  }
  componentDidMount() {
    axiosWrapper
      .get("/creators")
      .then(response => {
        console.log("here is the homepage response", response.data.creators);
        this.setState({ creators: response.data.creators});
      })
      .catch(err => {
        console.log("Error");
      });
    }
  creatorsList = () => {
    if (this.state.creators) {
      return this.state.creators.map((creator,i) => {
        return <li key={i}>{creator.firstName} {creator.lastName}</li>;
      });
    }
  };

  render() {
    return (
      <div>
      <div>Here are the list of users:
      </div>
      {this.creatorsList()}
      </div>
    );
  }
}

export default autoLogin(CSSModules(AboutUs, css));