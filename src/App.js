import React, { Component } from 'react';
import './App.css';
// import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import {todos} from './components/todos.json'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index) { 
    console.log(index)
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      }) 
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="card">
          <div className="card-header">
            <h3>{todo.title}</h3>
          </div>
          <div className="card-body">
            <p>{todo.description}</p>
          </div>
          <div className="card-footer">
            <button
              className="btn"
              onClick={this.removeTodo.bind(this, i)}
            >
            Delete
            </button>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <header>
          <h1>Todo App</h1>
        </header>
        <div className="container">
          <TodoForm onAddTodo={this.handleAddTodo} />
          <div>
            {todos}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
