export function checkAuth () {
  return !!localStorage.getItem('jwt')
}

export function logOut () {
  localStorage.removeItem('jwt')
}
