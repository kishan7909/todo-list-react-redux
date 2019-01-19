import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoApp from './TodoApp'
import store from './store/index'
import {Provider} from 'react-redux';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}

export default App;
