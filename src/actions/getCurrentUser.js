import adapter from '../adapter';
import { setCurrentUser } from './setCurrentUser';

export function getCurrentUser() {
  console.log('getCurrentUser fired')
  return (dispatch) => {
    adapter.auth.getLoggedInUser().then(user => {
      console.log('getLoggedinUser succeeded')
      if (user) {
        dispatch(setCurrentUser(user))
      } else {
        dispatch({type: 'LOGOUT_USER'})
      }
    })
  }
}