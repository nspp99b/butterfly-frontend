import adapter from '../adapter'

export function fetchFlaps() {
  return (dispatch) => {
    adapter.flaps.getFlaps()
    .then(data => {
      dispatch({ type: 'FETCH_FLAPS', payload: data.map(f => ({...f, showFlapEffects: false})) })
    })
  }
}
