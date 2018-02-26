// import { combineReducers } from 'redux';	
// 
// const rootReducer = combineReducers({	
//   flaps: flapsReducer
// });	


export default function flapsReducer(state = { flaps: [{id:1, content: "sup", fx_count: 0, showFlapEffects: false, effects:[]}] }, action) {	
  switch (action.type) {	
 	
     case 'SHOW_EFFECTS':	
      const f = state.flaps.find(flap => flap.id === action.flapId)
      const i = state.flaps.indexOf(flap => flap.id === action.flapId)
      f['showEffects'] = true
      return [...state.slice(0,i), f, ...state.slice(i+1)]
 	
    default:	
      return state;	
  }	
}	
