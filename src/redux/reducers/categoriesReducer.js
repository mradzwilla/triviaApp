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

		case 'GET_UNCOMPLETED_CATEGORY':
			function findUpcompletedCategory(category){
				return category.score < 5
			}
			console.log("NEW category")
			var upcompletedCategory = categories.activeCategories.find(findUpcompletedCategory)
			return Object.assign({}, categories, {currentCategory: upcompletedCategory})

		case 'ADD_SCORE':
			//Find the current category and add one to it's score
			var respObj = Object.assign({}, categories)
			var currentCategoryObj = respObj['currentCategory']
			var currentCategoryScore = currentCategoryObj['score']
			!currentCategoryScore ? currentCategoryObj['score'] = 1 : currentCategoryObj['score'] = (currentCategoryScore += 1) 
			return respObj

		case 'NEXT_QUESTION':
			let respObj = Object.assign({}, categories);
			respObj.currentCategory.currentIndex += 1
			return respObj
		default:
			return categories;
	}
}

export default categoriesReducer;