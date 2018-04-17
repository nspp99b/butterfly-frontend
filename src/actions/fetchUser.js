import adapter from '../adapter'

export function fetchUser(uid) {
  console.log('fetchUser fired')
  return (dispatch) => {
    adapter.users.getUser(uid)
    .then(data => {
      console.log('fetchUser succeeded')
      console.log(data)
      let u = Object.assign({}, data)
      delete u.flaps
      if (u) {
        dispatch({ type: 'FETCH_USER', payload: u })
        dispatch({ type: 'FETCH_FLAPS', payload: data.flaps})
      }
    })
  }
}
