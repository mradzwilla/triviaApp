//This component will contain the question description
//It will also need to conditionally display a text box and submit button or true/false buttons

import React, { Component } from 'react';
import shuffle from 'shuffle-array'

class OptionsComponent extends Component {
	getOptions(){
		var options = this.props.options
		options.push(this.props.answer)
		return shuffle(options)
	}
	render(){
		if (this.props.type === 'boolean'){
		    return (
		      <div>
		      	<button>True</button>
		      	<button>False</button>
		      </div>
		    )
		} else {
			return (
				<div>
				{this.getOptions().map((option, index) => {
						return <button 
									onClick={() => {this.props.actions.checkAnswer(this.props.questionId, option)}} 
									key={index}>
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