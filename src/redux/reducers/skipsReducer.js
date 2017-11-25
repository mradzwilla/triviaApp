//Remember, reducers are functions that take previous state and return new state as a pure function
//Do not mutate existing state

let skipsReducer = function(skips = 3, action){
	switch (action.type){
		// case 'SET_ALL_CATEGORIES':
		// 	return action.categories
		case 'USE_SKIP':
		console.log(skips)
		console.log(skips - 1)
			return skips - 1
		default:
			return skips;
	}
}

export default skipsReducer;