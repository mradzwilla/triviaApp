import axios from 'axios'
import shuffle from 'shuffle-array'

const constants = {
	GET_QUESTIONS: 'GET_QUESTIONS',
	CHECK_ANSWER: 'CHECK_ANSWER',
	QUESTIONS_OF_TYPE: 'QUESTIONS_OF_TYPE',
	SET_ALL_CATEGORIES: 'SET_ALL_CATEGORIES',
	UPDATE_ACTIVE_CATEGORIES: 'UPDATE_ACTIVE_CATEGORIES',
	CHANGE_CURRENT_CATEGORY: 'CHANGE_CURRENT_CATEGORY',
	ADD_SCORE: 'ADD_SCORE',
	LOSE_LIFE: 'LOSE_LIFE',
	NEXT_QUESTION: 'NEXT_QUESTION',
	GET_UNCOMPLETED_CATEGORY: 'GET_UNCOMPLETED_CATEGORY'
}

let actions = {
	getQuestionsOfType: function(category, amount){
		return {
			type: constants.QUESTIONS_OF_TYPE,
			meta: {
				amount: amount,
				categoryID: category,
			},
			payload: axios.get("https://opentdb.com/api.php?amount=" + amount + "&category=" + category)
		}
	},
	checkAnswer: function(correct){
		if (correct){
			return {
				type: constants.ADD_SCORE
			}
		} else {
			return {
				type: constants.LOSE_LIFE
			}
		}
	},
	nextQuestion: function(){
		return {
			type: constants.NEXT_QUESTION
		}
	},
	updateActiveCategories: function(categories){
		var shuffledArray = shuffle(categories).slice(0,5)
		//Add a score property if none exists and set initial index
		for (let i=0;i<shuffledArray.length;i++){
			var index = shuffledArray[i]
			if (!index['score']){
				index['score'] = 0
				index['currentIndex'] = 0
			}
		}
		return {
			type: constants.UPDATE_ACTIVE_CATEGORIES,
			categories: shuffledArray
		}
	},
	changeCurrentCategory: function(category){
		return {
			type: constants.CHANGE_CURRENT_CATEGORY,
			category: category
		}
	},
	getUpcompletedCategory: function(){
		return {
			type: constants.GET_UNCOMPLETED_CATEGORY
		}
	},
	addScoreToCategory: function(){
		return{
			type: constants.ADD_SCORE
		}
	}
}

export default actions