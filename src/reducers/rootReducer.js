import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  usersReducer,
  flapsReducer
});

function usersReducer(state = { currentUser: null, isLoggedIn: false, users: [] }, action) {
  switch (action.type) {

    case 'SET_CURRENT_USER':
      localStorage.setItem('token', action.payload.token)
      return {...state, currentUser: {id: action.payload.id, name: action.payload.name, email: action.payload.email}, isLoggedIn: true }

    case 'LOGOUT_USER':
      localStorage.removeItem('token')
      return { currentUser: null, isLoggedIn: false }

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

// function flapReducer(state = {}, action) {
//   switch (action.type) {
//
//     case 'FETCH_FLAP':
//       return action.payload
//     default:
//       return state;
//   }
// }
