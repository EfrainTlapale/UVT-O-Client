import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class SingleScore extends Component {
  propTypes = {
    name: React.PropTypes.string.isRequired,
    handleUpdate: React.PropTypes.func.isRequired
  }
  state = {
    input: ''
  }
  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  render () {
    return (
      <div style={{display: 'flex', flexFlow: 'row', justifyContent: 'space-around', alignItems: 'center'}} >
        <h1>{this.props.name}</h1>
        <TextField onChange={this.handleInput} />
        <RaisedButton onClick={() => this.props.handleUpdate(this.props.id, this.state.input)}>
          Subir Puntaje
        </RaisedButton>
      </div>
    )
  }
}

export default SingleScore
