//Remember, reducers are functions that take previous state and return new state as a pure function
//Do not mutate existing state
//Values are easy, medium, and hard
let difficultyReducer = function(difficulty = 'easy', action){
	switch (action.type){
		// case 'SET_ALL_CATEGORIES':
		// 	return action.categories
		case 'RESET':
			return difficulty
		case 'INCREASE_DIFFICULTY':
			return difficulty
		default:
			return difficulty;
	}
}

export default difficultyReducer;