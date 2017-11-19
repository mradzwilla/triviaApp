//Remember, reducers are functions that take previous state and return new state as a pure function
//Do not mutate existing state

let questionsReducer = function(state = {}, action){
	switch (action.type){
		case 'GET_QUESTIONS':
			console.log('Get Questions')
			return  "Whom I?"
		case 'GET_QUESTIONS_FULFILLED':
			console.log(state)
			return [{
				question: action.payload['data']['results'][0]['question'],
				answer: action.payload['data']['results'][0]['correct_answer'],
			}]
		case 'FETCHED':
			console.log("Fetched")
			return "Where da hood at?"
		default:
			return state;
	}
}

export default questionsReducer;