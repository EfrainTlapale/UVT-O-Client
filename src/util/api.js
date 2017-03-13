import axios from 'axios'

const authHeader = {Authorization: `Bearer ${localStorage.getItem('jwt')}`}

export function getLogs () {
  return axios.get('/api/logs', {
    headers: authHeader
  }).then(res => res.data)
}
