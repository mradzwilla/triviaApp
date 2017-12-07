import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer'
import categoriesReducer from './categoriesReducer'
import livesReducer from './livesReducer'
// import difficultyReducer from'./difficultyReducer'
import skipsReducer from './skipsReducer'
import roundReducer from './roundReducer'

const rootReducer = combineReducers({
	questions: questionsReducer,
	categories: categoriesReducer,
	lives: livesReducer,
	skips: skipsReducer,
	round: roundReducer
})

export default rootReducer