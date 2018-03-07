import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  usersReducer,
  flapsReducer
});

function usersReducer(state = { currentUser: {id: 0, name: "", email: "", image: "", following: [], followers: []}, isLoggedIn: false, users: [], selectedUser: {id: 0, name: "", email: "", image: "", following: [], followers: []} }, action) {
  switch (action.type) {

    case 'SET_CURRENT_USER':
      console.log(`set current user payload: ${action.payload}`)
      if (action.payload.token != null) {
        localStorage.setItem('token', action.payload.token)
      }
      return {...state, currentUser: action.payload.user, isLoggedIn: true }

    case 'REFRESH_CURRENT_USER':
      return {...state, currentUser: action.payload}

    case 'LOGOUT_USER':
      localStorage.removeItem('token')
      return { ...state, currentUser: {id: 0, name: "", email: "", image: "", following: [], followers: []}, isLoggedIn: false }

    case 'FETCH_USERS':
      return { ...state, users: action.payload }

    case 'FETCH_USER':
      return { ...state, selectedUser: action.payload}

    default:
      return state
  }
}

function flapsReducer(state = { flaps: [] }, action) {
  switch (action.type) {

    case 'FETCH_FLAPS':
 	    return { flaps: action.payload }

    case 'UPDATE_FLAP':
      return { flaps: action.payload }

    default:
      return state;
  }
}
