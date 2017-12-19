//This component will contain the question description
//It will also need to conditionally display a text box and submit button or true/false buttons

import React, { Component } from 'react';
import {batchActions} from 'redux-batched-actions';
import { Button, Col, ButtonGroup, ButtonToolbar } from 'react-bootstrap';

class OptionsComponent extends Component {
	// getOptions(){
	// 	//Slice is needed to create a copy to avid mutating state
	// 	var options = this.props.options.slice(0) 
	// 	if (options.length == 2 || options.length == 4){return options}
	// 	options.push(this.props.answer)
	// 	return shuffle(options)
	// }
	handleClick(isCorrect){
		let actions = this.props.actions
		batchActions([actions.checkAnswer(isCorrect), actions.nextQuestion()])
	}
	render(){
		if (this.props.type === 'boolean'){
		    return (
		      <ButtonToolbar>
		      	<Button bsClass="optionButton" onClick={() => {this.handleClick(this.props.answer === "True")}}>True</Button>
		      	<Button bsClass="optionButton" onClick={() => {this.handleClick(this.props.answer === "False")}}>False</Button>
		      </ButtonToolbar>
		    )
		} else {
			return (
				<ButtonGroup vertical className="optionButtonGroup">
				{this.props.options.map((option, index) => {
						return <Button 
									onClick={() => {this.handleClick(this.props.answer === option)}} 
									bsClass="optionButton"
									key={index}
									correct={this.props.answer === option}
								>
								{option}{' '}
								</Button>
					})
				}
				</ButtonGroup>
			)
		}
	}

}


export default OptionsComponent