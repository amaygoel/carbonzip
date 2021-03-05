import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//import {StripeProvider} from 'react-stripe-elements';    
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';    
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import { BrowserRouter } from 'react-router-dom';
import userReducer from '../src/store/reducers/user';
import mainReducer from '../src/store/reducers/main';
import adminReducer from '../src/store/reducers/admin';
import accountReducer from '../src/store/reducers/account';




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    admin: adminReducer,
    main: mainReducer,
    account: accountReducer,
    user: userReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


//FIREBASE ##################

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_4lmv_kpi5Ppsgpdbc1HYTs13ODzGlqc",
  authDomain: "carbonzip-651cb.firebaseapp.com",
  projectId: "carbonzip-651cb",
  storageBucket: "carbonzip-651cb.appspot.com",
  messagingSenderId: "118918184054",
  appId: "1:118918184054:web:4d63984f27de1bab4a7357",
  measurementId: "G-JTTV8YD670"
};
firebase.initializeApp(firebaseConfig);



//###########################

const app = (
  //<React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter basename = {'/'}>
        <App />
      </BrowserRouter>
    </Provider>
 // </React.StrictMode>
);


ReactDOM.render(
  app,  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// <StripeProvider apiKey="pk_live_IvgZBwAUScZgWuiOLd5ytQes">