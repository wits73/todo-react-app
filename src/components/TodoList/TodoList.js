import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoItem done>Studying React</TodoItem>
                <TodoItem>Knowing Components</TodoItem>
            </div>
        );
    }
}

export default TodoList;