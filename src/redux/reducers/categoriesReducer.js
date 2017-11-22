//Remember, reducers are functions that take previous state and return new state as a pure function
//Do not mutate existing state

let categoriesReducer = function(categories = {}, action){
	switch (action.type){
		// case 'SET_ALL_CATEGORIES':
		// 	return action.categories
		case 'UPDATE_ACTIVE_CATEGORIES':
			return {
				allCategories: categories.allCategories,
				activeCategories: action.categories,
				currentCategory: action.categories[0]['id']
			}
		case 'CHANGE_CURRENT_CATEGORY':
			return Object.assign({}, categories, {currentCategory: action.category})
		default:
			return categories;
	}
}

export default categoriesReducer;