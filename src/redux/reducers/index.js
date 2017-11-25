import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer'
import categoriesReducer from './categoriesReducer'
import livesReducer from './livesReducer'
// import difficultyReducer from'./difficultyReducer'
import skipsReducer from './skipsReducer'

const rootReducer = combineReducers({
	questions: questionsReducer,
	categories: categoriesReducer,
	lives: livesReducer,
	skips: skipsReducer
	// difficulty: difficultyReducer

})

export default rootReducer