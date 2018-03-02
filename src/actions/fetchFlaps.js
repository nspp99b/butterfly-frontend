import adapter from '../adapter'

export function fetchFlaps() {
  console.log('fetchFlaps fired')
  return (dispatch) => {
    adapter.flaps.getFlaps()
    .then(data => {
      console.log(`fetch flaps succeded: ${data}`)
      dispatch({ type: 'FETCH_FLAPS', payload: data.map(f => ({...f, showFlapEffects: false})) })
    })
  }
}
