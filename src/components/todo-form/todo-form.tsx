import React, {useState} from 'react';
import './todo-form.css';

const ToDoForm: React.FC = () => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log(title);
            setTitle('');
        }
    };

    return (
        <div className="input-field mt2">
            <input value={title}
                   onChange={changeHandler}
                   onKeyPress={keyPressHandler}
                   type="text"
                   id="title"
                   placeholder="Введите название дела"/>
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
    )
};

export default ToDoForm;
