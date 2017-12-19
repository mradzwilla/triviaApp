//Remember, reducers are functions that take previous state and return new state as a pure function
//Do not mutate existing state

let roundReducer = function(round = 1, action){
	switch (action.type){
		case 'ROUND_COMPLETE':
			return round + 1
		case 'RESTART_ROUNDS':
			return 0
		default:
			return round;
	}
}

export default roundReducer;