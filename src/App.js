import React, { Component } from 'react'

import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import Logout from './components/Logout'

import {checkAuth} from './util/auth'

const styles = {
  color: 'white'
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      openDrawer: false
    }
  }

  handleDrawer = () => {
    this.setState({
      openDrawer: !this.state.openDrawer
    })
  }

  render () {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <AppBar title={<Link to='/' style={styles}>UVT-O</Link>} onLeftIconButtonTouchTap={this.handleDrawer} />
            <Drawer docked={false} open={this.state.openDrawer} onRequestChange={this.handleDrawer} >
              {!checkAuth() && <Link to='/login'><MenuItem onTouchTap={this.handleDrawer}>Login</MenuItem></Link> }
              { checkAuth() && <Link to='/'><MenuItem onTouchTap={this.handleDrawer}>Inicio</MenuItem></Link>}
              <Divider />
              { checkAuth() && <Link to='/logout'><MenuItem onTouchTap={this.handleDrawer}>Logout</MenuItem></Link> }
            </Drawer>
            <div style={{marginLeft: '20px', marginRight: '20px'}}>
              <PrivateRoute exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/logout' component={Logout} />
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
