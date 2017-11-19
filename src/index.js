import React from 'react'
import { render } from 'react-dom'
import App from "./components/App"
import configureStore from './redux/store'
import { Provider } from 'react-redux'
// import axios from 'axios';

//Remember each element added in state also needs to be assigned a reducer
let initialState = {
	questions: "Hello",
}

//configureStore basically just moves the middleware to its own file. This functions like createStore
let store = configureStore(initialState)

// store.dispatch((dispatch) => {
// 	dispatch({type: "FETCH_SOMETHING"})
// 	axios.get("http://rest.learncode.academy/api/wstern/users")
// 		.then((response) => {
// 			console.log(response)
// 			dispatch({type: "FETCHED"})
// 		})
// })

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
) 