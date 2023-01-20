import React from "react";
import { Link } from "react-router-dom";
import cl from './Impress.module.css';

const Impress = ({elem, visible, setVisible, visibleImpress, setVisibleImpress, returnImpress}) => {
    const classesName = [cl.sale];

    const checkVisibleAndVisibleImpress = () => {
        if(visible || visibleImpress){
            classesName.push(cl.none);
        }
    };
    checkVisibleAndVisibleImpress();
    
    return (
        <div key={elem.id} className={cl.elem}>
            <img src={elem.img} className="p-0 w-100" style={{maxWidth: '407px', width: '100%'}}/>
            {elem.sale && <Link to="/sale" className={classesName.join(' ')}>Акция</Link>}
            <h3 className={cl.h3}>
                {elem.title}
            </h3>
            <p className={cl.p}>
                {elem.price}
            </p>
            <button 
                className={cl.order}
                onClick={() => setVisible(true)}
            >
                Заказать
            </button>
            <button 
                className={cl.detail}
                onClick={() => {setVisibleImpress(true); returnImpress(elem)}}
            >
                Подробнее
            </button>
        </div>
    );
};

export default Impress;
