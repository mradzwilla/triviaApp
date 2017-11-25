//This component will contain the question description
//It will also need to conditionally display a text box and submit button or true/false buttons

import React, { Component } from 'react';
import {batchActions} from 'redux-batched-actions';

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
		      <div>
		      	<button onClick={() => {this.handleClick(this.props.answer === "True")}}>True</button>
		      	<button onClick={() => {this.handleClick(this.props.answer === "False")}}>False</button>
		      </div>
		    )
		} else {
			return (
				<div>
				{this.props.options.map((option, index) => {
						return <button 
									onClick={() => {this.handleClick(this.props.answer === option)}} 
									key={index}
									correct={this.props.answer === option}
									>
								{option}
								</button>
					})
				}
				</div>
			)
		}
	}

}


export default OptionsComponent