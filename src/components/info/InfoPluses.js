import React from "react";
import one from './one.svg';
import two from './two.svg';
import three from './three.svg';
import four from './four.svg';
import cl from './InfoPluses.module.css'

const InfoPluses = () => {
    return <div className={cl.df}>
        <div className={cl.dfl}>
            <div><img src={one} /></div>
            <p>Впечатления по цене партнёра</p>
        </div>
        <div className={cl.dfl}>
            <div><img src={two} /></div>
            <p>Бесплатная доставка в день заказа</p>
        </div>
        <div className={cl.dfl}>
            <div><img src={three} /></div>
            <p>Красивые сертификаты на любое впечатление</p>
        </div>
        <div className={cl.dfl}>
            <div><img src={four} /></div>
            <p>Проверенные партнёры</p>
        </div>
    </div>;
};

export default InfoPluses;
