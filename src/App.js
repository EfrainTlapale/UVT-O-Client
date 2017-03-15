import React, { Component } from 'react'

import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import Logout from './components/Logout'
import Scores from './components/Scores'
import Logs from './components/Logs'
import NotFound from './components/NotFound'

import {checkAuth} from './util/auth'

const styles = {
  color: 'white'
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      openDrawer: false,
      authenticated: checkAuth()
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
              {!this.state.authenticated && <Link to='/login'><MenuItem onTouchTap={this.handleDrawer}>Login</MenuItem></Link> }
              { this.state.authenticated && <Link to='/'><MenuItem onTouchTap={this.handleDrawer}>Inicio</MenuItem></Link>}
              <Divider />
              { this.state.authenticated && <Link to='/logout'><MenuItem onTouchTap={this.handleDrawer}>Logout</MenuItem></Link> }
              { this.state.authenticated && <Link to='/logs'><MenuItem onTouchTap={this.handleDrawer}>Logs</MenuItem></Link> }
              { this.state.authenticated && <Link to='/torneo'><MenuItem onTouchTap={this.handleDrawer}>Torneo</MenuItem></Link> }
            </Drawer>
            <div style={{marginLeft: '20px', marginRight: '20px'}}>
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/logout' component={Logout} />
                <PrivateRoute exact path='/torneo' component={Scores} />
                <PrivateRoute exact path='/logs' component={Logs} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
