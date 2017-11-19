import React from 'react'
import { render } from 'react-dom'
import App from "./components/App"
import configureStore from './redux/store'
import { Provider } from 'react-redux'
// import axios from 'axios';

//Remember each element added in state also needs to be assigned a reducer
let initialState = {
	questions: [],
}

//configureStore basically just moves the middleware to its own file. This functions like createStore
let store = configureStore(initialState)

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
) 