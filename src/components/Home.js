import React, { Component } from 'react'
import {getLogs} from '../util/api'

class Home extends Component {
  state = {
    logs: []
  }
  componentWillMount () {
    getLogs().then(data => {
      this.setState({
        logs: data.logs
      })
    })
  }
  render () {
    const logs = this.state.logs.map(log => {
      return <h2 key={log.id}>{log.message} - {log.intention}</h2>
    })
    return (
      <div>
        <h1>Logs</h1>
        {logs}
      </div>
    )
  }
}

export default Home
