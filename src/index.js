import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//style
// import "bootstrap/dist/css/bootstrap.min.css";

//Router
import {BrowserRouter} from 'react-router-dom'
//Redux
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
//Reducer import here
import userReducer from './Reducers/UserReducer'
import PromptContainerReducer from './Reducers/PromptContainerReducer'
import PieceCardReducer from './Reducers/PieceCardReducer'

let rootReducer = combineReducers({user: userReducer ,promptContainer: PromptContainerReducer, PieceCardReducer:PieceCardReducer })
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
 const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

//const store = createStore(rootReducer)



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
  <App />
</Provider>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
