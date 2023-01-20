import React from "react";
import cl from "./SaleMonth.module.css";
import SaleMonthAPI from "./SaleMonthAPI";
import list from "../impress/API";
import { Carousel, CarouselItem } from "react-bootstrap";

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
      <Carousel className={cl.my_carousel}>
        {elemsSale.map((elem, index) => (
          <CarouselItem key={elem.id}>
            <SaleMonthAPI
              elem={elem}
              visible={visible}
              setVisible={setVisible}
            />
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};

export default SaleMonth;
