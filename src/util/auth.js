import axios from 'axios'

export function checkAuth () {
  return !!localStorage.getItem('jwt')
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
