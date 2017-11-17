import React, { Component } from 'react';
import actions from '../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class App extends Component {
  render() {
    return (
      <div className="app">
        Hello world
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