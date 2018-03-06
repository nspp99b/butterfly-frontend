import adapter from '../adapter'

export function updateFlap(fid) {
  adapter.auth.getLoggedInUser()
  return (dispatch) => {
    adapter.flaps.patchFlap(fid)
    .then(data => {
      dispatch({ type: 'UPDATE_FLAP', payload: data })
    })
  }
}
