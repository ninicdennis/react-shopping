
import React, { Component } from "react";
import CSSModules from "react-css-modules";
import autoLogin from "../../../process/users/auth/auto-login";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
//spotlight is the render function for when you click the side.
import Spotlight from '../../components/spotlight/index'
import ReMap from './reMap/index'

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creators: [], // base creator + userhandle
      creator: {}, // more creator information
      updatedCreator: {}, // 3rd one to adjust how the input tag updates
    };
  }
  componentDidMount() {
    axiosWrapper
      .get("/creators")
      .then(response => {
        console.log("creators response", response.data.creators);
        this.setState({ creators: response.data.creators, updatedCreator: response.data.creators,});
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
      this.setState({ 
        creator: response.data.creator,
        updatedCreator: response.data.creator
      });
    })
    .catch(err => {
      console.log("Error on picking up ID");
    });
  }
  updateCreator = (event) => {
    event.preventDefault()
    this.setState({
       updatedCreator: {
      ...this.state.creator,
      firstName: event.target.value
    }});
  }  

  submitCreatorUpdate = (event, userhandle) => {
    event.preventDefault()
    axiosWrapper
    .put(`/creators/${userhandle}`, {creator: this.state.updatedCreator})
    .then(response => {
      console.log('update creator response', response)
      const { creator } = response.data;
      this.setState({ creator: creator, updateCreator: creator });
    })
    .catch(err => {
      console.log('error updating response.')
    })
  }

  render() {
    return (
      <div styleName = 'container'>
        <aside styleName = 'leftSide'>
          Creators:
            <ReMap creators= {this.state.creators} >
                
           </ReMap>
          </aside>
          <aside styleName = 'rightSide'>
              More info:
              <Spotlight 
              submitCreatorUpdate = {this.submitCreatorUpdate}
              updateCreator = {this.updateCreator}
              creator = {this.state.creator}
              updatedCreator={this.state.updatedCreator}
              />
          </aside>
      </div>
    );
  }
}

export default autoLogin(CSSModules(AboutUs, css));