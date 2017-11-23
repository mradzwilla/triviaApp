import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer'
import categoriesReducer from './categoriesReducer'
import livesReducer from './livesReducer'

const rootReducer = combineReducers({
	questions: questionsReducer,
	categories: categoriesReducer,
	lives: livesReducer,
})

export default rootReducer