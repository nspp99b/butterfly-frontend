import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  usersReducer,
  flapsReducer
});

function usersReducer(state = { currentUser: {id: 0, name: "", email: "", following: [], followers: []}, isLoggedIn: false, users: [], selectedUser: {id: 0, name: "", email: "", following: [], followers: []} }, action) {
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
      return { ...state, currentUser: null, isLoggedIn: false }

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
 
    case 'SHOW_EFFECTS':
      const f = state.flaps.find(flap => flap.id === action.flapId)
      const i = state.flaps.indexOf(f)
      f.showFlapEffects = !f.showFlapEffects
      return { flaps: [...state.flaps.slice(0,i), f, ...state.flaps.slice(i+1)] }

    case 'FETCH_FLAPS':
 	    return { flaps: action.payload }

    case 'UPDATE_FLAP':
      return { flaps: action.payload }

    default:
      return state;
  }
}
