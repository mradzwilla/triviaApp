//This component will contain contain the category of questions to be cycled through
//It will need to dispatch a method to update an active category state field

import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class CategoryDisplayComponent extends Component {

  render() {
  	if (this.props.score >= 5) {
  		return (
  			<Button bsClass="categoryButton completedCategory"><del>{this.props.category}</del></Button>
  		)
  	} else {
	    return (
	      <Button bsClass="categoryButton" onClick={() => {this.props.actions.changeCurrentCategory(this.props.categoryId)}}>
	      	{this.props.category}
	      </Button>
	    );
	}
  }
}


export default CategoryDisplayComponent