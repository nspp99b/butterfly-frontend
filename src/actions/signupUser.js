import adapter from '../adapter';
import { setCurrentUser } from './setCurrentUser';

export function signupUser(newUserData) {
  return (dispatch) => {
    adapter.auth.signup(newUserData).then(res => {
      if (res.error) {
        alert(res.error);
      } else {
        dispatch(setCurrentUser(res));
      };
    });
  };
};
