import adapter from '../adapter'

export function fetchFlaps() {
  return (dispatch) => {
    adapter.flaps.getFlaps()
    .then(data => {
      dispatch({ type: 'FETCH_FLAPS', payload: data })
    })
  }
}


// import { RestfulAdapter } from "../adapters";
// 
// export function fetchHobsWithJobs() {
//   //using thunk, we return are returning a function here instead of
//   //a plain object.  Thunk intercepts this returned value, and if it is a
//   //function, cancels the normal event of calling our reducers, and
//   //instead, passes in 'dispatch' as an argument to the function.
//   //the fetch request was extracted out to our adapter, but still functions the same
//   return (dispatch) => {
//     //dispatch({ type: "HOBBITS_LOADING" });
//     RestfulAdapter.indexFetch("hobbits").then(data => {
//       dispatch({ type: "HOBBIT_LOAD", payload: data });
//     });
//   };
// }