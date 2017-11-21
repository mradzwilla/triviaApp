import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer'
import categoriesReducer from './categoriesReducer'

const rootReducer = combineReducers({
	questions: questionsReducer,
	categories: categoriesReducer,
})

export default rootReducer