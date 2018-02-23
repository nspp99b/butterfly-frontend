import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';	
// import { Provider } from 'react-redux';
// import myReducer from './reducers/myReducer'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// const store = createStore(	
//   myReducer,	
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()	
// );	
 	
ReactDOM.render((
  // <Provider store={store}>	
    // <App store={store}/>	
  // </Provider>, 
  <Router>  
    <App />
  </Router>),
  document.getElementById('root')	
);
registerServiceWorker();
