import axios from 'axios'
import jwt from 'jwt-decode'

// First checks if the token exists, then check the expiration
export function checkAuth () {
  return !!localStorage.getItem('jwt') && jwt(localStorage.getItem('jwt')).exp > Date.now()
}

export function logOut () {
  localStorage.removeItem('jwt')
}

export function logIn (username, password, cb) {
  axios.post('/api/login', {username, password})
  .then(res => {
    if (res.data.success) {
      setToken(res.data.token)
      cb(null)
    }
  })
  .catch((err) => {
    console.log(err)
    cb(true)
  })
}

function setToken (token) {
  localStorage.setItem('jwt', token)
}
