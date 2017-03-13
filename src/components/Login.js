import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {Redirect} from 'react-router-dom'
import {logIn, checkAuth} from '../util/auth'

class Login extends Component {
  state = {
    redirect: false,
    username: '',
    password: '',
    showError: false
  }

  handleLogin_ = () => {
    console.log(this.state)
  }

  handleLogin = () => {
    logIn(this.state.username, this.state.password, (err) => {
      if (err) {
        this.setState({showError: true})
      } else {
        this.setState({redirect: true})
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render () {
    if (this.state.redirect) {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{textAlign: 'center'}}>Login</h1>
        <TextField id='username' floatingLabelText='Nombre de usuario' onChange={this.handleChange} />
        <TextField id='password' floatingLabelText='Contraseña' onChange={this.handleChange} type='password' />
        <RaisedButton id='hola' label='Iniciar Sesión' style={{marginTop: '2em'}} onClick={this.handleLogin} />
        {this.state.showError && <h1>Error al iniciar sesión</h1>}
      </div>
    )
  }
}

export default Login
