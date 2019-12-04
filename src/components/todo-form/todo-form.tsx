import React, {useRef} from 'react';
import './todo-form.css';

const ToDoForm: React.FC = () => {
    // const [title, setTitle] = useState<string>('');
    //
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value);
    // };
    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            // console.log(title);
            // setTitle('');
            ref.current!.value = '';
        }
    };

    return (
        <div className="input-field mt2">
            <input
                // value={title}
                // onChange={changeHandler}
                ref={ref}
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
