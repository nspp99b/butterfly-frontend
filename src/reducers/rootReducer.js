import { combineReducers } from 'redux';	

export const rootReducer = combineReducers({	
  flapsReducer,
  flapReducer
});	

function flapsReducer(state = { flaps: [] }, action) {	
  switch (action.type) {	
 	
    case 'SHOW_EFFECTS':	
      const f = state.flaps.find(flap => flap.id === action.flapId)
      const i = state.flaps.indexOf(f)
      f.showFlapEffects = true
      return { flaps: [...state.flaps.slice(0,i), f, ...state.flaps.slice(i+1)] }
      
    case 'FETCH_FLAPS':
 	    return { flaps: action.payload }

    default:	
      return state;	
  }	
}	

function flapReducer(state = {}, action) {
  switch (action.type) {
    
    case 'FETCH_FLAP':
      return action.payload
    default:
      return state;
  }
}