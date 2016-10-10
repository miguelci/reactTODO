import _ from 'lodash';
import React, { Component } from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

class TodosList extends Component {

  renderItems(){
    const props = _.omit(this.props, 'todos');
    return this.props.todos.map((todo, idx) =>
     <TodosListItem key={idx} {...todo} {...props}/>);
  }
  render() {
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}

export default TodosList;
