import React, { Component } from 'react';
import actions from '../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import QuestionComponent from './QuestionComponent'
import CategoryDisplayComponent from './CategoryDisplayComponent'

class App extends Component {

  componentWillMount(){
    this.props.actions.updateActiveCategories(this.props.categories.allCategories)
    this.props.actions.getInitialQuestions();
  }

  render() {
    return (
      <div className="app">
        <h1>LET'S GET TRIVIAL!</h1>
        <div>Timer Component</div>
        <div>Lives Component</div>
        <CategoryDisplayComponent actions={this.props.actions} category={false}/>
        <button onClick={this.props.actions.getInitialQuestions}>Get questions </button>
        <button onClick={() => this.props.actions.updateActiveCategories(this.props.categories.allCategories)}>Update categories</button>
          {this.props.questions.map((question, i) => {
            return <QuestionComponent 
                      key={i}
                      actions = {this.props.actions} 
                      question={question.question} 
                      answer={question.answer} 
                      options={question.options} 
                      type={question.type}
                      id={question.id}
                   />
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