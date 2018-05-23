import adapter from '../adapter';
import { setCurrentUser } from './setCurrentUser';

export function getCurrentUser() {
  console.log('getCurrentUser fired');
  return (dispatch) => {
    adapter.auth.getLoggedInUser().then(user => {
      console.log('getCurrentUser succeeded');
      console.log(user);
      if (user) {
        dispatch(setCurrentUser({ user }));
      } else {
        console.log('getCurrentUser fired LOGOUT_USER action');
        dispatch({ type: 'LOGOUT_USER' });
      };
    });
  };
};
