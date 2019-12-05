import React, {useEffect, useState} from 'react';
import ToDoForm from "../components/todo-form/todo-form";
import ToDoList from "../components/todo-list/todo-list";
import {IToDo} from "../components/interfaces";

const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<IToDo[]>([]);

    useEffect(() => {
        const saved: IToDo[] = JSON.parse(localStorage.getItem('todos') || '[]') as IToDo[];
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

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
            <ToDoForm onAdd={addHanler}/>
            <ToDoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
        </>
    )
};

export default TodoPage;
