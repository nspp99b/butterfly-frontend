import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';	
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/rootReducer'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from "redux-thunk";

const store = createStore(	
  rootReducer,	
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)	
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
