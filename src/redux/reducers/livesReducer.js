//Remember, reducers are functions that take previous state and return new state as a pure function
//Do not mutate existing state

let livesReducer = function(lives = 5, action){
	switch (action.type){
		case 'LOSE_LIFE':
			return lives - 1
		case 'RESET_LIVES':
			return 5
		default:
			return lives;
	}
}

export default livesReducer;