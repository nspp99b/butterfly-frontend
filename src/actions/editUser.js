import adapter from '../adapter';

export function editUser(uid, patchUserBody) {
  return (dispatch) => {
    adapter.users.patchUser(uid, patchUserBody).then(res => {
      if (res.error) {
        alert(res.error);
      } else {
        dispatch({ type: 'REFRESH_CURRENT_USER', payload: res });
      };
    });
  };
};
