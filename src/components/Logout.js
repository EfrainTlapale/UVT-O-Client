import React, { Component } from 'react'
import {logOut} from '../util/auth'
import {Redirect} from 'react-router-dom'

class Logout extends Component {
  componentWillMount () {
    logOut()
    this.props.handleLogin()
  }
  render () {
    return (
      <Redirect to='/login' />
    )
  }
}

export default Logout
