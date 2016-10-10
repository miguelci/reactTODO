import React, { Component } from 'react';
import TodosList from './components/todos-list';
import CreateToDo from './components/create-todo';
import './App.css';

const todos = [
  /*{
    task: "Eat pizza",
    isCompleted: true
  },
  {
    task: "Make React Tutorial",
    isCompleted: false
  },
  {
    task: "Go Home",
    isCompleted: false
  }*/
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos };
  }
  render() {
    return (
      <div className="App">
        <h1>React ToDos App</h1>
        <CreateToDo
          todos={this.state.todos}
          createTask={this.createTask.bind(this)}
        />
        <TodosList
          todos={this.state.todos}
          toogleTask={this.toogleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }

  createTask(task){
      this.state.todos.push({
        task,
        isCompleted: false
      });
      this.setState({todos: this.state.todos});
  }

  toogleTask(task){
    const foundToDo = this.state.todos.find(todo => todo.task === task);
    foundToDo.isCompleted = !foundToDo.isCompleted;
    this.setState({todos : this.state.todos});
  }

  saveTask(oldTask, newTask){
    const foundToDo = this.state.todos.find(todo => todo.task === oldTask);
    foundToDo.task = newTask;
    this.setState({todos: this.state.todos});
  }

  deleteTask(taskToDelete){
    this.setState({todos: this.state.todos.filter(todo => todo.task !== taskToDelete)});
  }
}










export default App;
