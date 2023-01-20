import React from "react";
import { Link } from "react-router-dom";
import cl from './Footer.module.css';
import logoFooter from './logoFooter.svg';
import Instagram from "../social/Instagram";
import Vk from "../social/Vk";

const Footer = ({visible, setVisible}) => {
    return (
        <div className={cl.footer}>
            <div className={cl.logoBlock}>
                <div className={cl.logoDiv}>
                    <img src={logoFooter}/>
                </div>
                <p>Все права защищиены © Дари Душой, 2022 г.</p>
            </div>
            <div className={cl.navigation}>
                <div className={cl.menu}>
                    <h3>Меню</h3>
                    <ul>
                        <li>
                            <Link to="/">Каталог</Link>
                        </li>
                        <li>
                            <Link to="sale">Акции</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Контакты</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className={cl.number}>
                        <a href="#">+7 (999) 123-45-67</a>
                    </div>
                    <div className={cl.social}>
                        <Vk />
                        <Instagram />
                    </div>
                </div>
            </div>
            <div className={cl.request}>
                <h1>Остались вопросы?</h1>
                <p>Оставьте заявку, мы свяжемся с Вами в ближайшее время</p>
                <button onClick={() => setVisible(true)}>Оставить заявку</button>
            </div>
            <div className={cl.law}>Все права защищиены © Дари Душой, 2022 г.</div>
        </div>
)};

export default Footer;
