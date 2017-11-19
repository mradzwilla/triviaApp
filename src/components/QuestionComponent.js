//This component will contain the question description
//It will also need to conditionally display a text box and submit button or true/false buttons

import React, { Component } from 'react';

class QuestionComponent extends Component {
  render() {
    return (
      <div>

      	<h1>Question: {this.props.question}</h1>
        <h2>{this.props.answer}</h2>
      </div>
    );
  }
}


export default QuestionComponent