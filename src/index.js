import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from '../src/components/redux/reducer/reducer'
import { createStore, applyMiddleware } from 'redux';
import { viewDataBase } from './components/redux/actions/actions'


const store = createStore(reducer, applyMiddleware(thunk))
store.dispatch(viewDataBase)

ReactDOM.render(

  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
