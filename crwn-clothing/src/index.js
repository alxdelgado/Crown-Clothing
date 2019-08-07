import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 


import './index.css';
import App from './App';
import store from './redux/store'; 


ReactDOM.render(

// Provider is a component class that we get from 'react-redux' and once passed the store object, it will be able to give that redux store context to the rest of the application. We can then dispatch actions to that store or pull values off of the store and into our components. 

<Provider store={ store }>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
, document.getElementById('root')
);

