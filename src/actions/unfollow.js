import adapter from '../adapter'

export function unfollow(follower_id, followed_id) {
  console.log('postUnfollow fired')
  return (dispatch) => {
    adapter.follows.postUnfollow(follower_id, followed_id)
    .then(data => {
      console.log('postUnfollow succeeded')
      console.log(data)
      dispatch({ type: 'FETCH_USER', payload: data.user })
      dispatch({ type: 'REFRESH_CURRENT_USER', payload: data.currentUser })
    })
  }
}
