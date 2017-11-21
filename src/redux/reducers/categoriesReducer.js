//Remember, reducers are functions that take previous state and return new state as a pure function
//Do not mutate existing state

let categoriesReducer = function(categories = {}, action){
	switch (action.type){
		// case 'SET_ALL_CATEGORIES':
		// 	return action.categories
		case 'UPDATE_ACTIVE_CATEGORIES':
			console.log('UPDATE_ACTIVE_CATEGORIES')
			console.log(categories)
			console.log(action)
			return {
				allCategories: categories.allCategories,
				activeCategories: action.categories
			}
		default:
		console.log("DEFAULT")
			return categories;
	}
}

export default categoriesReducer;