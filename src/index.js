import React from 'react'
import { render } from 'react-dom'
import App from "./components/App"
import configureStore from './redux/store'
import { Provider } from 'react-redux'
// import axios from 'axios';

var categories = {
	allCategories:[
		{"id":9,"name":"General Knowledge"},
		{"id":10,"name":"Books"},
		{"id":11,"name":"Film"},
		{"id":12,"name":"Music"},
		{"id":13,"name":"Musicals & Theatres"},
		{"id":14,"name":"Television"},
		{"id":15,"name":"Video Games"},
		{"id":16,"name":"Board Games"},
		{"id":17,"name":"Science & Nature"},
		{"id":18,"name":"Computers"},
		{"id":19,"name":"Mathematics"},
		{"id":20,"name":"Mythology"},
		{"id":21,"name":"Sports"},
		{"id":22,"name":"Geography"},
		{"id":23,"name":"History"},
		{"id":24,"name":"Politics"},
		{"id":25,"name":"Art"},
		{"id":26,"name":"Celebrities"},
		{"id":27,"name":"Animals"},
		{"id":28,"name":"Vehicles"},
		{"id":29,"name":"Comics"},
		{"id":30,"name":"Gadgets"},
		{"id":32,"name":"Cartoon & Animations"}
		],
	activeCategories: [],
	currentCategory: 0
}
//Remember each element added in state also needs to be assigned a reducer
let initialState = {
	questions: [],
	categories: categories,
}

//configureStore basically just moves the middleware to its own file. This functions like createStore
let store = configureStore(initialState)
render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
) 