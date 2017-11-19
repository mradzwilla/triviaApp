import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer'
// import fetcherReducer from './fetcherReducer'

const rootReducer = combineReducers({
	questions: questionsReducer,
})

export default rootReducer