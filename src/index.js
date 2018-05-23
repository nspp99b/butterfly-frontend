import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/rootReducer'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from "redux-thunk";

// create store with thunk middleware, devtools

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

// wrap app in router and provider

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App store={store}/>
    </Router>
  </Provider>),
  document.getElementById('root')
);
registerServiceWorker();
