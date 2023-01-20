import React from "react";
import cl from './SaleMonthAPI.module.css';

const SaleMonthAPI = ({elem, visible, setVisible}) => {
  return (
    <div className={cl.container}>
        <div className={cl.containerText}>
            <div className={cl.saleTitle}>
                <h3>акция месяца</h3>
            </div>
            <div className={cl.saleElemInfo}>
                <h1>{elem.title} для двоих!</h1>
                <p>
                    <del>4 000 ₽</del> {elem.price}
                </p>
                <button onClick={() => setVisible(true)}>Заказать впечатление</button>
            </div>
        </div>
        <div className={cl.saleImgRight}>
            <img src={elem.imgSale}/>
        </div>
        <div className={cl.saleImgMobile}>
            <img src={elem.imgSaleMobile}/>
        </div>
    </div>
  );
};

export default SaleMonthAPI;
