import React, { Component } from 'react';
import './App.css';
import Board from './components/Board'
import DynamicForm from './components/DynamicForm'

class App extends Component {
  render() {
    const model = [
      {
        id: '1',
        name: 'name',
        value: 'introduce your name here1',
        type: 'text'
      },
      {
        id: '2',
        name: 'name',
        value: 'introduce your name here2',
        type: 'text'
      },
      {
        id: '3',
        name: 'name',
        value: 'introduce your name here3',
        type: 'text'
      }
    ]
    return (
      <div className="App">
        <div className="game">
          <div className="game-board">
            <Board></Board>
          </div>
          <DynamicForm model={model} />
        </div>
      </div>
    );
  }
}

export default App;
