//This component will contain the question description
//It will also need to conditionally display a text box and submit button or true/false buttons

import React, { Component } from 'react';
import shuffle from 'shuffle-array'

class OptionsComponent extends Component {
	getOptions(){
		//Slice is needed to create a copy to avid mutating state
		var options = this.props.options.slice(0)
		options.push(this.props.answer)
		return shuffle(options)
	}
	render(){
		if (this.props.type === 'boolean'){
		    return (
		      <div>
		      	<button onClick={() => {this.props.actions.checkAnswer(this.props.answer === "True")}}>True</button>
		      	<button onClick={() => {this.props.actions.checkAnswer(this.props.answer === "False")}}>False</button>
		      </div>
		    )
		} else {
			return (
				<div>
				{this.getOptions().map((option, index) => {
						return <button 
									onClick={() => {this.props.actions.checkAnswer(this.props.answer === option)}} 
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