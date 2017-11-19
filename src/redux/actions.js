import axios from 'axios'

const constants = {
	GET_QUESTIONS: 'GET_QUESTIONS' 
}

let actions = {
	getInitialQuestions: function(payload){
		return {
			type: constants.GET_QUESTIONS,
			payload: axios.get("https://opentdb.com/api.php?amount=10")
		}
	}
}

export default actions