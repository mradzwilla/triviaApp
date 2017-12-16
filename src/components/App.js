import React, { Component } from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {batchActions} from 'redux-batched-actions';
// import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';
import QuestionComponent from './QuestionComponent';
import CategoryDisplayComponent from './CategoryDisplayComponent';
import SkipComponent from './SkipComponent';
import LivesComponent from './LivesComponent';

// import 'bootstrap/less/bootstrap.less'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      timer: 0,
      maxLives: 5
    }
    this.tick = this.tick.bind(this)
  }
  componentWillMount(){
    this.newRound()
  }
  componentDidMount() {
      // let timer = setInterval(this.tick, 1000);
      // this.setState({timer});
  }
  componentDidUpdate(){
      if (this.props.categories.currentCategory.score >= 5){
        if (!this.allCategoriesComplete(this.props.categories.activeCategories)){
          this.props.actions.getUpcompletedCategory(this.props.categories.activeCategories)
        } else{
          this.newRound()
        }
      }
  }
  componentWillUnmount() {
      this.clearInterval(this.state.timer);
  }
  allCategoriesComplete(categories){
    //If a category has less than a score of 5
    for (let i=0;i < categories.length; i++){
      if (categories[i]['score'] < 5){
        return false
      }
    }
    //If not
    return true
  }
  tick() {
      this.setState({
        timer: this.state.timer + 1
      });
  }
  newRound(){
    this.props.actions.clearQuestions()
    this.props.actions.roundComplete() //This action name is awful and needs to be changed

    var categories = this.props.actions.updateActiveCategories(this.props.categories.allCategories)['categories']
    //Category has id and name property
    for (var i=0; i < categories.length ; i++){
      this.props.actions.getQuestionsOfType(categories[i]['id'], 10, this.props.difficulty)
    }
  }
  render() {
    var currentQuestionArray = this.props.questions[this.props.categories.currentCategory['id']]

    return (
      <div className="app">
        <div>
        <h1 className="logo">LET'S GET TRIVIAL!</h1>
        </div>
        <div className="headerWrapper">
        <LivesComponent maxLives={this.state.maxLives} lives={this.props.lives}/>
        <SkipComponent actions={this.props.actions} skips={this.props.skips}/>
        </div>
        {/*<button onClick={this.props.actions.addScoreToCategory}>Add score </button>
                <button onClick={this.props.actions.clearQuestions}>CLEAR</button>
        <button onClick={() => {this.props.actions.getUpcompletedCategory(this.props.categories.activeCategories)}}>Get uncompleted </button>
        */}
        <div className="buttonRowWrapper">
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
        </div>
        <div className="score">{5-this.props.categories.currentCategory.score} more {this.props.categories.currentCategory.name} questions</div>
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