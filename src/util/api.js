import axios from 'axios'

const headers = {Authorization: `Bearer ${localStorage.getItem('jwt')}`}

export function getLogs () {
  return axios.get('/api/logs', {
    headers
  }).then(res => res.data)
}

export function getScores () {
  return axios.get('/api/scores', {
    headers
  })
  .then(res => res.data)
}

export function updateScore (id, newScore) {
  console.log(id, newScore)
  return axios.put('/api/scores',
    {
      id,
      newScore
    },
    {
      headers
    })
    .then(res => res.data)
}
