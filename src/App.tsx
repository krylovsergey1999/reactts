import React, {useState} from 'react';
import Navbar from './components/navbar';
import ToDoForm from "./components/todo-form/todo-form";
import ToDoList from "./components/todo-list/todo-list";
import {IToDo} from "./components/interfaces";

const App: React.FC = () => {
    const [todos, setTodos] = useState<IToDo[]>([]);

    const addHanler = (title: string) => {
        console.log('add new todo', title);
        const newToDo: IToDo = {
            title: title,
            id: Date.now(),
            completed: false
        };
        // setTodos([newToDo, ...todos]) - не лучший код т.к асинхронность может накосячить
        setTodos(prev => [newToDo, ...prev])
    };

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }))
    };

    const removeHandler = (id: number) => {
        const shoudRemove = window.confirm('Вы уверены что хотите удалить элемент?');
        if (shoudRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    };

    return (
        <>
            <Navbar/>
            <div className="container">
                <ToDoForm onAdd={addHanler}/>
                <ToDoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
            </div>
        </>
    );
};

export default App;
