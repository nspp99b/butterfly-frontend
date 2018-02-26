import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';	
import { Provider } from 'react-redux';
import flapsReducer from './reducers/rootReducer'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(	
  flapsReducer,	
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()	
);	
 	
ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App store={store}/>
    </Router>  
  </Provider>),
  document.getElementById('root')	
);
registerServiceWorker();
