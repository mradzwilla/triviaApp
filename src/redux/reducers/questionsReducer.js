//he convert strings with HTML entities to their readable counterparts
import he from 'he'

//Remember, reducers are functions that take previous state and return new state as a pure function
//Do not mutate existing state
let questionsReducer = function(state = {}, action){
	switch (action.type){
		case 'GET_QUESTIONS':
			console.log('Get Questions')
			return  []
		case 'GET_QUESTIONS_FULFILLED':
			console.log(state)
			// return [{
			// 	question: he.decode(action.payload['data']['results'][0]['question']),
			// 	answer: action.payload['data']['results'][0]['correct_answer'],
			// }]
			return action.payload['data']['results'].map((question) => {
				return {
					question: he.decode(question['question']),
					answer: he.decode(question['correct_answer'])
				}
			})
		default:
			return state;
	}
}

export default questionsReducer;