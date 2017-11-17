const constants = {
	GET_QUESTIONS: 'GET_QUESTIONS' 
}

let actions = {
	getInitialQuestions: function(){
		type: constants.GET_QUESTIONS
	}
}

export default actions