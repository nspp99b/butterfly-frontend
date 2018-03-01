export function logoutUser() {
  return (dispatch) => {
    dispatch({type: 'LOGOUT_USER'})
  }
}
