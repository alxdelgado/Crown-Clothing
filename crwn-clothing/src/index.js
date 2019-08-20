import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { PersistGate } from 'redux-persist/integration/react';  

import {store, persistor} from './redux/store';

import './index.css';
import App from './App';
 


ReactDOM.render(

// Provider is a component class that we get from 'react-redux' and once passed the store object, it will be able to give that redux store context to the rest of the application. We can then dispatch actions to that store or pull values off of the store and into our components. 

<Provider store={ store }>
    <BrowserRouter>
        <PersistGate persistor={ persistor }>
            <App />
        </PersistGate>
    </BrowserRouter>
</Provider>
, document.getElementById('root')
);

// PersistGate - what this is for is for is to allow our application to always have persistance flow. It will allow the PersistGate to A) recieve the store B) fire off actions that will rehydrate the "state" whenever our application refreshes. 
