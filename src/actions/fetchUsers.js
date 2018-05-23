import adapter from '../adapter';

export function fetchUsers() {
  console.log('fetchUsers fired');
  return (dispatch) => {
    adapter.users.getUsers()
    .then(data => {
      console.log(`fetchUsers succeeded: ${data}`);
      dispatch({ type: 'FETCH_USERS', payload: data });
    });
  };
};
