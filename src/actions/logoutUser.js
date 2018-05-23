export function logoutUser() {
  console.log('logoutUser action fired');
  return (dispatch) => {
    dispatch({ type: 'LOGOUT_USER' });
  };
};
