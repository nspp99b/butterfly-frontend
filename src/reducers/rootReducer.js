// import { combineReducers } from 'redux';	
// 
// const rootReducer = combineReducers({	
//   flaps: flapsReducer
// });	

const initialState = { 
  flaps: 
    [
      {id:1, content: "sup", fx_count: 1, showFlapEffects: false, effects:
        [
          {id:2, content: "effect yo", fx_count: 0, showFlapEffects: false, effects:[] },
          {id:3, content: "number two", fx_count: 1, showFlapEffects: false, effects:
            [
              {id:5, content: "level three", fx_count: 0, showFlapEffects: false, effects:[] }
            ] 
          }
        ] 
      }
    ] 
  }

export default function flapsReducer(state = initialState, action) {	
  switch (action.type) {	
 	
     case 'SHOW_EFFECTS':	
      const f = state.flaps.find(flap => flap.id === action.flapId)
      const i = state.flaps.indexOf(f)
      f.showFlapEffects = true
      return { flaps: [...state.flaps.slice(0,i), f, ...state.flaps.slice(i+1)] }
 	
    default:	
      return state;	
  }	
}	
