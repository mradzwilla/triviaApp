import React, { Component } from 'react';
import actions from '../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import QuestionComponent from './QuestionComponent'
 
class App extends Component {

  componentWillMount(){
    this.props.actions.getInitialQuestions()
  }

  render() {
    return (
      <div className="app">
        <button onClick={this.props.actions.getInitialQuestions}>Get questions </button>
          {this.props.questions.map((question, i) => {
            return <QuestionComponent key={i} question={question.question} answer={question.answer} options={question.options} type={question.type}/>
            }) 
          }
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)