//he convert strings with HTML entities to their readable counterparts
import he from 'he'
import merge from 'deepmerge'
import shuffle from 'shuffle-array'

//Remember, reducers are functions that take previous state and return new state as a pure function
//Do not mutate existing state
let questionsReducer = function(state = {}, action){
	switch (action.type){
		case 'GET_QUESTIONS':
			return []
		case 'GET_QUESTIONS_FULFILLED':
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
					var incorrectAnswers = question['incorrect_answers'].map((option) => {return he.decode(option)})
					var allChoices = question['incorrect_answers'].map((option) => {return he.decode(option)})
					var correctAnswer = he.decode(question['correct_answer'])
					allChoices.push(correctAnswer)
					return {
						question: he.decode(question['question']),
						answer: correctAnswer,
						type: question['type'],
						options: incorrectAnswers,
						//Shuffling makes the function impure which is technically wrong but it's the best place to randomize options
						allChoices: shuffle(allChoices),
						id: index
					}
				})
			var newQuestionEntry = {
				[action.meta.categoryID]: questionsArray
			}
			return merge(state, newQuestionEntry)
		case 'CLEAR_QUESTIONS':
			return {}
		default:
			return state;
	}
}

export default questionsReducer;