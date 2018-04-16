import adapter from '../adapter'

export function follow(follower_id, followed_id) {
  console.log('postFollow fired')
  return (dispatch) => {
    adapter.follows.postFollow(follower_id, followed_id)
    .then(data => {
      console.log('postFollow succeeded')
      console.log(data)
      dispatch({ type: 'FETCH_USER', payload: data.followed })
      dispatch({ type: 'REFRESH_CURRENT_USER', payload: data.follower })
    })
  }
}
