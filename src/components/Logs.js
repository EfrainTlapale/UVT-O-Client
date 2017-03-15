import React, { Component } from 'react'
import {getLogs} from '../util/api'
import {Table, TableBody, TableHeader, TableRow, TableHeaderColumn, TableRowColumn} from 'material-ui/Table'
import TextField from 'material-ui/TextField'

class Logs extends Component {
  state = {
    logs: [],
    filteredLogs: [],
    searchString: ''
  }
  componentWillMount () {
    getLogs().then(data => {
      this.setState({
        logs: data.logs
      })
    })
  }

  handleSearch = (e) => {
    const filteredLogs = this.state.logs.filter(log => log.intention.toLowerCase().indexOf(e.target.value.trim().toLowerCase()) !== -1)
    this.setState({
      filteredLogs,
      searchString: e.target.value
    })
  }
  render () {
    const tableContainer = {
      marginLeft: '10%',
      marginRight: '10%'
    }
    let logs = []
    if (this.state.searchString) {
      logs = this.state.filteredLogs
    } else {
      logs = this.state.logs
    }
    const renderedLogs = logs.map(log => {
      return (
        <TableRow key={log._id}>
          <TableRowColumn>
            {log.message}
          </TableRowColumn>
          <TableRowColumn>
            {log.intention}
          </TableRowColumn>
        </TableRow>
      )
    })
    return (
      <div style={tableContainer}>
        <h1>Logs</h1>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <h3>Buscar:</h3><TextField id='search' onChange={this.handleSearch} />
        </div>
        <Table fixedHeader>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn> Mensaje </TableHeaderColumn>
              <TableHeaderColumn> Intención </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {renderedLogs}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default Logs
