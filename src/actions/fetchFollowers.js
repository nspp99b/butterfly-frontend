import adapter from '../adapter'

export function fetchFollowers(uid) {
  console.log('fetchFollowers fired')
  return (dispatch) => {
    adapter.follows.getFollowers(uid)
    .then(data => {
      console.log('fetchFollowers succeeded')
      console.log(data)
      dispatch({ type: 'FETCH_USERS', payload: data })
    })
  }
}
