//This component will contain contain the category of questions to be cycled through
//It will need to dispatch a method to update an active category state field

import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class LivesComponent extends Component {


  render() {
		let livesArray = []

		for (let i=0;i<this.props.maxLives;i++){
			if (i < this.props.lives){
				livesArray.push((
						<FontAwesome key={i} className='life' name='heart'/>
					)
				)
			} else {
				livesArray.push((
						<FontAwesome key={i} className='lifeLost' name='times'/>
					)
				)
			}
		}

		return <div className='livesContainer'>{livesArray}</div>
  }
}


export default LivesComponent