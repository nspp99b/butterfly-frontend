import adapter from '../adapter'

export function fetchFlap(fid) {
  return (dispatch) => {
    adapter.flaps.getFlap(fid)
    .then(data => {
      dispatch({ type: 'FETCH_FLAP', payload: data})
    })
  }
}
