import adapter from '../adapter'

export function fetchUser(uid) {
  console.log('fetchUser fired')
  return (dispatch) => {
    adapter.users.getUser(uid)
    .then(data => {
      console.log('fetchUser succeeded')
      console.log(data)
      if (data.user) {
        dispatch({ type: 'FETCH_USER', payload: data.user })
        dispatch({ type: 'FETCH_FLAPS', payload: data.flaps})
      }
    })
  }
}
