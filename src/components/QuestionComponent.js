//This component will contain the question description
//It will also need to conditionally display a text box and submit button or true/false buttons

import React, { Component } from 'react';
import OptionsComponent from './OptionsComponent';

class QuestionComponent extends Component {
  render() {
  	console.log(this)
    return (
      <div>
      	<h1>Question: {this.props.question}</h1>
      	<OptionsComponent actions = {this.props.actions} type={this.props.type} questionId={this.props.id} answer={this.props.answer} options={this.props.options}/>
        <h2>{this.props.answer}</h2>
      </div>
    );
  }
}


export default QuestionComponent