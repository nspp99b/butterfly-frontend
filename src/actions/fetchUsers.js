import adapter from '../adapter'

export function fetchUsers() {
  return (dispatch) => {
    adapter.users.getUsers()
    .then(data => {
      dispatch({ type: 'FETCH_USERS', payload: data })
    })
  }
}
