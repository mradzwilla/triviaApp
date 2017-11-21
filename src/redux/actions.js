import axios from 'axios'
import shuffle from 'shuffle-array'

const constants = {
	GET_QUESTIONS: 'GET_QUESTIONS',
	CHECK_ANSWER: 'CHECK_ANSWER',
	QUESTIONS_OF_TYPE: 'QUESTIONS_OF_TYPE',
	SET_ALL_CATEGORIES: 'SET_ALL_CATEGORIES',
	UPDATE_ACTIVE_CATEGORIES: 'UPDATE_ACTIVE_CATEGORIES'
}

let actions = {
	getInitialQuestions: function(){
		return {
			type: constants.GET_QUESTIONS,
			payload: axios.get("https://opentdb.com/api.php?amount=10")
		}
	},
	getQuestionsOfType: function(category, amount){
		return {
			type: constants.QUESTIONS_OF_TYPE,
			amount: amount,
			category: category
		}
	},
	checkAnswer: function(questionId, option){
		return {
			type: constants.CHECK_ANSWER
		}
	},
	// setAllCatessgories: function(categories){
	// 	return {
	// 		type: constants.SET_ALL_CATEGORIES,
	// 		categories: categories
	// 	}
	// },
	updateActiveCategories: function(categories){
		var shuffledArray = shuffle(categories).slice(0,5)

		return {
			type: constants.UPDATE_ACTIVE_CATEGORIES,
			categories: shuffledArray
		}
	}
}

export default actions