import adapter from '../adapter'

export function addFlap(content, user_id, parent) {
  return (dispatch) => {
    adapter.flaps.postFlap(content, user_id, parent)
    .then(data => {
      dispatch({ type: 'FETCH_FLAPS', payload: data})
    })
  }
}
