import React, { Component } from 'react'
import {logOut} from '../util/auth'
import {Redirect} from 'react-router-dom'

class Logout extends Component {
  componentWillMount () {
    logOut()
  }
  render () {
    return (
      <Redirect to='/login' />
    )
  }
}

export default Logout
