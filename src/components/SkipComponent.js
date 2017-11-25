//This component will contain contain the category of questions to be cycled through
//It will need to dispatch a method to update an active category state field

import React, { Component } from 'react';
import {batchActions} from 'redux-batched-actions';

class SkipComponent extends Component {

  handleClick(){
	let actions = this.props.actions
	batchActions([actions.useSkip(), actions.nextQuestion()])
  }
  render() {
  		if (!this.props.skips){
  			return <div>All out of skips!</div>
  		} else {
  			let skipArray = []
  			for (var i=0;i<this.props.skips;i++){
  				skipArray.push((
  					<button onClick={() => {this.handleClick()}}>
      					Skip Question!
      				</button>)
      			)
  			}
			return <div>{skipArray}</div>
  		}
  }
}


export default SkipComponent