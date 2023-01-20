import React, { useState } from "react";
import open from './open.svg';
import close from './close.svg';
import cl from './Question.module.css';

const Question = ({elem, showAnswer, hideAnswer}) => {

    const [visible, setVisible] = useState(elem.show);

    function goHideAnswer() {
        setVisible(!visible);
        hideAnswer(elem.id);
    }

    function goShowAnswer() {
        setVisible(!visible);
        showAnswer(elem.id);
    }

    return <div className={cl.question_answer}>
        <div className={cl.q_a}>
            <p className={cl.p} onClick={visible ? goHideAnswer : goShowAnswer}>{elem.question}</p>
            {visible && <div className={cl.span}>{elem.answer}</div>}
        </div>
        <div>
            {visible 
                ? <button 
                    className={cl.button}
                    onClick={goHideAnswer}
                ><img src={open}/></button>
                : <button 
                    className={cl.button}
                    onClick={goShowAnswer}
                ><img src={close}/></button> 
            }
        </div>
</div>;
};

export default Question;
