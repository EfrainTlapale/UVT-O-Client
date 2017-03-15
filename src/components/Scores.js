import React, { Component } from 'react'
import {getScores, updateScore} from '../util/api'
import SingleScore from './singleScore'

class Scores extends Component {
  state = {
    scores: []
  }
  componentWillMount () {
    this.getScoresFromApi()
  }

  getScoresFromApi = () => {
    getScores().then(data => {
      this.setState({
        scores: data.scores
      })
    })
  }

  handleUpdateScore = (id, newScore) => {
    updateScore(id, newScore).then(data => {
      this.getScoresFromApi()
    })
  }

  render () {
    let completedScores = []
    let pendingScores = []
    this.state.scores.forEach(score => {
      if (score.score > 0) {
        completedScores.push(<h1>{score.name} --> {score.score} puntos</h1>)
      } else {
        pendingScores.push(<SingleScore id={score._id} name={score.name} handleUpdate={this.handleUpdateScore} />)
      }
    })
    return (
      <div>
        <h1>Puntajes</h1>
        {completedScores}
        {pendingScores}
      </div>
    )
  }
}

export default Scores
