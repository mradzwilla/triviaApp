import React, { Component } from 'react';
import actions from '../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import QuestionComponent from './QuestionComponent'
import CategoryDisplayComponent from './CategoryDisplayComponent'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      timer: 0
    }
    this.tick = this.tick.bind(this)
  }
  componentWillMount(){
    var categories = this.props.actions.updateActiveCategories(this.props.categories.allCategories)['categories']
    //Category has id and name property
    for (var i=0; i < categories.length ; i++){
      this.props.actions.getQuestionsOfType(categories[i]['id'], 10)
    }
  }
  componentDidMount() {
      let timer = setInterval(this.tick, 1000);
      this.setState({timer});
  }
  componentDidUpdate(){
      if (this.props.categories.currentCategory.score >= 5){
        this.props.actions.getUpcompletedCategory()
      }
  }
  componentWillUnmount() {
      this.clearInterval(this.state.timer);
  }
  tick() {
      this.setState({
        timer: this.state.timer + 1
      });
  }

  render() {
    var currentQuestionArray = this.props.questions[this.props.categories.currentCategory['id']]

    return (
      <div className="app">
        <h1>LET'S GET TRIVIAL!</h1>
        <div>{this.state.timer}</div>
        <div>Lives: {this.props.lives}</div>
        <div>Score: {this.props.categories.currentCategory.score}</div>
        <button onClick={this.props.actions.addScoreToCategory}>Add score </button>
                <button onClick={this.props.actions.getUpcompletedCategory}>Get uncompleted </button>
        {this.props.categories.activeCategories.map((category, i) => {
            return <CategoryDisplayComponent 
                      key={i}
                      actions={this.props.actions} 
                      category={category.name}
                      categoryId={category.id}
                      score={category.score}
                    />
          })
        }
        { (currentQuestionArray) ? 
          <QuestionComponent 
                    actions = {this.props.actions} 
                    question={currentQuestionArray[this.props.categories.currentCategory.currentIndex]['question']} 
                    answer={currentQuestionArray[this.props.categories.currentCategory.currentIndex]['answer']} 
                    options={currentQuestionArray[this.props.categories.currentCategory.currentIndex]['allChoices']} 
                    type={currentQuestionArray[this.props.categories.currentCategory.currentIndex]['type']}
                    id={currentQuestionArray[this.props.categories.currentCategory.currentIndex]['id']}
                 />
          : <div> Loading Questions...</div>
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

  // <button onClick={() => this.props.actions.updateActiveCategories(this.props.categories.allCategories)}>Update categories</button>
    // {this.props.questions.map((question, i) => {
    //   return <QuestionComponent 
    //             key={i}
    //             actions = {this.props.actions} 
    //             question={question.question} 
    //             answer={question.answer} 
    //             options={question.options} 
    //             type={question.type}
    //             id={question.id}
    //          />
    //   }) 
    // }

    // { (currentQuestionArray) ? 
    //   currentQuestionArray.map((question, i) => {
    //   return <QuestionComponent 
    //             key={i}
    //             actions = {this.props.actions} 
    //             question={question.question} 
    //             answer={question.answer} 
    //             options={question.options} 
    //             type={question.type}
    //             id={question.id}
    //          />
    //   }) : <div>Loading Questions...</div>
    // }