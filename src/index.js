import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';

// This is Entry Point

//  Make store related with Reuducer
const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
     document.getElementById('root')
  );
