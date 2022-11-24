import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer  from './redux/reducer';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const appStore = createStore(reducer)
root.render(
    <Provider store={appStore}>
      <App />
    </Provider>
);



