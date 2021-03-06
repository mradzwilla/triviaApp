//Remember, reducers are functions that take previous state and return new state as a pure function
//Do not mutate existing state

let skipsReducer = function(skips = 3, action){
	switch (action.type){
		case 'USE_SKIP':
			return skips - 1
		default:
			return skips;
	}
}

export default skipsReducer;