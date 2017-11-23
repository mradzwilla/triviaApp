//Remember, reducers are functions that take previous state and return new state as a pure function
//Do not mutate existing state

let livesReducer = function(lives = 5, action){
	switch (action.type){
		// case 'SET_ALL_CATEGORIES':
		// 	return action.categories
		case 'LOSE_LIFE':
			return lives - 1
		default:
			return lives;
	}
}

export default livesReducer;