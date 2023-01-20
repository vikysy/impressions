import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context";
import close from '../../../images/close.svg';
import cl from './MyModalImpress.module.css';

const MyModalImpress = ({elem, visibleImpress, setVisibleImpress, visible, setVisible}) => {
    const key = [];
    const value = [];

    function fillArrays() {
        for(let k in elem.priceSelect) {
            key.push(k);
            value.push(elem.priceSelect[k]);
        }
    }
    fillArrays();
    
    const {valueSelect, setValueSelect} = useContext(AuthContext);

    function orderImpress() {
        setValueSelect(0);
        setVisibleImpress(false);
        setVisible(true);
    }

    return (
        <>
            <div className={cl.btnClose} onClick={() => {setVisibleImpress(false); setValueSelect(0)}}>
                <img src={close} />
            </div>
            <div className={cl.container}>
                <div>
                    <div className={cl.imgMain}>
                        <img src={elem.imgImpress} />
                    </div>
                    <div>
                        <img src={elem.imgImpress} className={cl.imgMinor} />
                        <img src={elem.imgImpress} className={cl.imgMinor} />
                        <img src={elem.imgImpress} className={cl.imgMinor} />
                    </div>
                </div>
                <div className={cl.wrapInfo}>
                    <div>
                        <h1 className={cl.h1}>{elem.title}</h1>
                        <div className={cl.blockSelect}>
                            <p>{elem?.priceSelect ? key[valueSelect] : elem.price}</p>
                            {elem?.priceSelect && <select value={valueSelect} onChange={event => setValueSelect(event.target.value)}>
                                {value.map((unit,index) => <option 
                                    value={index} 
                                    key={index}>
                                        {unit}
                                </option>)}
                            </select>}
                        </div>
                        <button onClick={orderImpress} className={cl.btnImpress}>Заказать впечатление</button>
                    </div>
                    <h2>Подробнее о впечатлении:</h2>
                    <div className={cl.elemInfoPriceSelect}>{elem.info}</div>
                </div>
            </div>
        </>
    );
};

export default MyModalImpress;
