//This component will contain contain the category of questions to be cycled through
//It will need to dispatch a method to update an active category state field

import React, { Component } from 'react';

class CategoryDisplayComponent extends Component {
  render() {
    return (
      <button onClick={() => {this.props.actions.changeCurrentCategory(this.props.categoryId)}}>
      	{this.props.category}
      </button>
    );
  }
}


export default CategoryDisplayComponent