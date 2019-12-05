import React from 'react';
import {useHistory} from 'react-router-dom';

const AboutPage: React.FC = () => {
    const history = useHistory();

    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi autem corporis delectus
                doloremque eligendi facilis ipsam magnam odio quidem. Ab at corporis cumque eveniet impedit ipsa nisi
                rem rerum!</p>
            <button
                className="btn"
                onClick={() => history.push('/')}
            >
                Обратно к списку дел
            </button>
        </>
    )
};

export default AboutPage;
