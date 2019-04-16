import React from 'react'

import * as rootUserActions from '../../../state/actions'
import connected from '../../../state/connect'

class SignOut extends React.Component {
  componentDidMount() {
    this.props.rootUserActions.resetAllData()
  }

  render() {
    return null
  }
}

export default connected([], [rootUserActions])(SignOut)
