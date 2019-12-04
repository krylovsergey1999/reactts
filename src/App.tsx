import React from 'react';
import Navbar from './components/navbar';
import ToDoForm from "./components/todo-form/todo-form";

const App: React.FC = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <ToDoForm/>
            </div>
        </>
    );
};

export default App;
