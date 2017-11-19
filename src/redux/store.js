import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers'; //Will default to index.js
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

let finalCreateStore = compose(
	applyMiddleware(promise(), thunk, createLogger())
)(createStore)

// configureStore function is imported by src/index.js where it is combine with initial state to wrap the main App component
export default function configureStore(initialState = {todos: [] }) {
	return finalCreateStore(rootReducer, initialState)
}

// import {applyMiddleware, createStore } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

// const reducer = (state ={}, action) =>{
// 	return state
// }

// const middleware = applyMiddleware(thunk, logger())
// const store = createStore(reducer, middleware)

// export default store