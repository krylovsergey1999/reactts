import React from 'react';
import './todo-list.css';
import {IToDo} from "../interfaces";

type TodoListProps = {
    todos: IToDo[]
}

const ToDoList: React.FC<TodoListProps> = ({todos}) => {
    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo'];

                if (todo.completed) {
                    classes.push('completed');
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed}/>
                            <span>{todo.title}</span>
                            <i className="material-icons red-text">delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
};


export default ToDoList;
