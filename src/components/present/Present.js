import React from "react";
import cl from './Present.module.css';
import img from './present.png';

const Present = () => {
    return <div className={cl.presentContainer}>
        <div className={cl.presentDivImg}>
            <h1 className={cl.mediaMaxWidth}>Сертификат в дизайнерском конверте</h1>
            <img src={img}/>
        </div>
        <div className={cl.presentText}>
            <h1 className={cl.mediaMixWidth}>Сертификат в дизайнерском конверте</h1>
            <ul>
                <li>Электронный сертификат - бесплатный</li>
                <li>Сертификат в подарочном конверте - 200р</li>
                <li>Срок действия сертификата - 3 месяца</li>
                <li>Бесплатная доставка в день заказа</li>
                <li>Есть возможность заменить впечатление по сертификату, если подарок не понравится</li>
            </ul>
        </div>
    </div>;
};

export default Present;
