import React from "react";
import cl from "./SaleMonth.module.css";
import SaleMonthAPI from "./SaleMonthAPI";
import list from "../impress/API";

const SaleMonth = ({ visible, setVisible }) => {
  const elemsSale = [];

  function checkSaleTrue(elem) {
    list.map((elem) => {
      if (elem.sale) {
        elemsSale.push(elem);
      }
    });
  }
  checkSaleTrue();

  return (
    <div className={cl.container}>
      
      <div className={cl.slider}>
        <div className={cl.sliderTrack}>
          {elemsSale.map((elem, index) => (
            <div key={elem.id} className={cl.sliderItem}>
              <SaleMonthAPI  elem={elem}  visible={visible} setVisible={setVisible}/>
            </div>
          ))}
        </div>
      </div>
      {/* <SaleMonthAPI key={elem.id} elem={elem}  visible={visible} setVisible={setVisible}/> */}
    </div>
  );
};

export default SaleMonth;