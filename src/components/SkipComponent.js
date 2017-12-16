//This component will contain contain the category of questions to be cycled through
//It will need to dispatch a method to update an active category state field

import React, { Component } from 'react';
import {batchActions} from 'redux-batched-actions';
import {Button, ButtonToolbar} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class SkipComponent extends Component {

  handleClick(){
	let actions = this.props.actions
	batchActions([actions.useSkip(), actions.nextQuestion()])
  }
  render() {
  		if (!this.props.skips){
  			return <div>No Skips Left!</div>
  		} else {
  			let skipArray = []
  			for (var i=0;i<this.props.skips;i++){
  				skipArray.push((
  					<Button key={i} bsClass="skipButton" onClick={() => {this.handleClick()}}>SKIP</Button>
      				)
      			)
  			}

			return (
				<div className="skipsContainer">
				<ButtonToolbar className='text-center'>{skipArray}</ButtonToolbar>
				</div>
				)
  		}
  }
}


export default SkipComponent

// <FontAwesome key={i} name='refresh' className='refreshIcon' onClick={() => {this.handleClick()}}>
// </FontAwesome>