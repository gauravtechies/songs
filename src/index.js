import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
//If we have to import export function then we will use curly braises otherwise if using export defauly then no need 

ReactDom.render(
    <App/>,
    document.querySelector('#root')

);
