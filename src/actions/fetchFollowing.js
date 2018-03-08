import adapter from '../adapter'

export function fetchFollowing(uid) {
  console.log('fetchFollowing fired')
  return (dispatch) => {
    adapter.follows.getFollowing(uid)
    .then(data => {
      console.log('fetchFollowing succeeded')
      console.log(data)
      dispatch({ type: 'FETCH_USERS', payload: data })
    })
  }
}
