import React, { useState } from 'react';
import cl from './Questions.module.css';
import Question from './Question';
import questions from './QuestionsAPI';

const Questions = () => {

    const [show, setShow] = useState(questions);

    function showAnswer (id) {
        setShow(questions.map(question => {
            if(question.id === id) {
                return {...question, show: true};
            } else {
                return question;
            }
        }));
    }

    function hideAnswer (id) {
        setShow(questions.map(question => {
            if(question.id === id) {
                return {...question, show: false};
            } else {
                return question;
            }
        }));
    }

    return (<div className={cl.containerQuestions}>
        <h1 className={cl.h1}>Часто задаваемые вопросы</h1>
        <div className={cl.containerInfo}>
            {questions.map(elem => <Question key={elem.id} elem={elem} showAnswer={showAnswer} hideAnswer={hideAnswer}/>)}
        </div>
    </div>);
};

export default Questions;
