import adapter from '../adapter'

export function addFlap(content, user_id) {
  return (dispatch) => {
    adapter.flaps.postFlap(content, user_id)
    .then(data => {
      dispatch({ type: 'FETCH_FLAPS', payload: data.map(f => ({...f, showFlapEffects: false})) })
    })
  }
}