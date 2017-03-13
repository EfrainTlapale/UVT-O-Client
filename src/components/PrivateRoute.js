import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import {checkAuth} from '../util/auth'

const PrivateRoute = ({component, ...rest}) => (
  <Route {...rest} render={props => (
    checkAuth() ? React.createElement(component, props) : <Redirect to='/login' />
  )} />
)

export default PrivateRoute
