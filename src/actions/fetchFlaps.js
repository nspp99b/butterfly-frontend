import adapter from '../adapter';

export function fetchFlaps() {
  console.log('fetchFlaps fired');
  return (dispatch) => {
    adapter.flaps.getFlaps()
    .then(data => {
      console.log('fetchflaps succeeded');
      console.log(data);
      dispatch({ type: 'FETCH_FLAPS', payload: data});
    });
  };
};
