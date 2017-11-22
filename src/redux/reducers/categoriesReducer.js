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
				currentCategory: action.categories[0]
			}
		case 'CHANGE_CURRENT_CATEGORY':
			function findCategory(category){
				return category.id === action.category
			}
			var currentCategory = categories.activeCategories.find(findCategory)
			return Object.assign({}, categories, {currentCategory: currentCategory})

		case 'ADD_SCORE':
			//Find the current category and add one to it's score
			var respObj = Object.assign({}, categories)
			var currentCategoryObj = respObj['currentCategory']
			var currentCategoryScore = currentCategoryObj['score']
			!currentCategoryScore ? currentCategoryObj['score'] = 1 : currentCategoryObj['score'] = (currentCategoryScore += 1) 

			return respObj
		default:
			return categories;
	}
}

export default categoriesReducer;