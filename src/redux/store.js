import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers'; //Will default to index.js
import {enableBatching} from 'redux-batched-actions';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

let finalCreateStore = compose(
	applyMiddleware(promise(), thunk, createLogger())
)(createStore)

// configureStore function is imported by src/index.js where it is combine with initial state to wrap the main App component
export default function configureStore(initialState = {todos: [] }) {
	return finalCreateStore(enableBatching(rootReducer), initialState)
}