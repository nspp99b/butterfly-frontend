import adapter from '../adapter';
import { setCurrentUser } from './setCurrentUser';

export function loginUser(email, password) {
  console.log('loginUser fired')
  return (dispatch) => {
    adapter.auth.login(email, password).then(res => {
      console.log(res)
      if (res.error) {
        alert(res.error)
      } else {
        console.log('loginUser fired setCurrentUser to dispatch')
        dispatch(setCurrentUser(res))    
      }
    })
  }
}