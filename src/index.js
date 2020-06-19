import React from 'react';
import ReactDom from 'react-dom';
import  {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';
//If we have to import export function then we will use curly braises otherwise if using export defauly then no need 
import  reducers  from './reducers';
ReactDom.render(
    <Provider store={createStore(reducers)}>
      <App/>
    </Provider>
    ,document.querySelector('#root')

);
