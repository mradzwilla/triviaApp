import React, { Component } from 'react';
import actions from '../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import QuestionComponent from './QuestionComponent'

// {
//   this.props.todos.map((todo) => {
//     return <TodoItem key={todo.id} todo={todo} actions={this.props.actions}/>
//   })
// }
 
class App extends Component {

  componentWillMount(){
    this.props.actions.getInitialQuestions()
    console.log(this.props.questions)
  }

  render() {
    return (
      <div className="app">
        Hello world
        <button onClick={this.props.actions.getInitialQuestions}>Get questions </button>
          {this.props.questions.map((question, i) => {
            return <QuestionComponent key={i} question={question.question} answer={question.answer}/>
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