//he convert strings with HTML entities to their readable counterparts
import he from 'he'
import merge from 'deepmerge'
//Remember, reducers are functions that take previous state and return new state as a pure function
//Do not mutate existing state
let questionsReducer = function(state = {}, action){
	switch (action.type){
		case 'GET_QUESTIONS':
			return []
		case 'GET_QUESTIONS_FULFILLED':
			console.log(action.payload)
			return action.payload['data']['results'].map((question, index) => {
				return {
					question: he.decode(question['question']),
					answer: he.decode(question['correct_answer']),
					type: question['type'],
					options: question['incorrect_answers'].map((option) => {return he.decode(option)}),
					id: index
				}
			})
		case 'QUESTIONS_OF_TYPE_FULFILLED':
			var questionsArray = action.payload['data']['results'].map((question, index) => {
					return {
						question: he.decode(question['question']),
						answer: he.decode(question['correct_answer']),
						type: question['type'],
						options: question['incorrect_answers'].map((option) => {return he.decode(option)}),
						id: index
					}
				})
			var newQuestionEntry = {
				[action.meta.categoryID]: questionsArray
			}
			// var stateCopy = state.map(a => ({...a}))
			// console.log(stateCopy)
			// stateCopy.push(newQuestionEntry)
			return merge(state, newQuestionEntry)

		case 'CHECK_ANSWER':
			return state;
		default:
			return state;
	}
}

export default questionsReducer;