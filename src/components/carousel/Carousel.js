import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import one from './one.png';
import two from './two.png';
import three from './three.png';
import four from './four.png';
import cl from './Carousel.module.css';

function UncontrolledExample({visible, setVisible}) {

  function showMyModal() {
    setVisible(true);
  }

  return (
    <>
      <Carousel style={{marginBottom: '71px'}}>

        <CarouselItem>
          <img
            className="d-block w-100"
            src={one}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className={cl.cena}>от 990 ₽</p>
            <h1 className={cl.title}>КОННАЯ ПРОГУЛКА</h1>
            <button className={cl.btn} onClick={showMyModal}>Заказать впечатление</button>
          </Carousel.Caption>
        </CarouselItem>

        <CarouselItem>
          <img
            className="d-block w-100"
            src={two}
            alt="Second slide"
          />
          <Carousel.Caption>
            <p className={cl.cena}>3000 ₽</p>
            <h1 className={cl.title}>ПОЛЕТ НА МОТОПАРАПЛАНЕ</h1>
            <button className={cl.btn} onClick={showMyModal}>Заказать впечатление</button>
          </Carousel.Caption>
        </CarouselItem>

        <CarouselItem>
          <img
            className="d-block w-100"
            src={three}
            alt="Third slide"
          />
          <Carousel.Caption>
            <p className={cl.cena}>от 3500 ₽</p>
            <h1 className={cl.title}>ПРОГУЛКА НА ЯХТЕ "ЧАЙКА"</h1>
            <button className={cl.btn} onClick={showMyModal}>Заказать впечатление</button>
          </Carousel.Caption>
        </CarouselItem>

        <CarouselItem>
          <img
            className="d-block w-100"
            src={four}
            alt="Third slide"
          />
          <Carousel.Caption>
            <p className={cl.cena}>от 3000 ₽</p>
            <h1 className={cl.title}>ВЕЧЕР В КУПОЛЕ</h1>
            <button className={cl.btn} onClick={showMyModal}>Заказать впечатление</button>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
    </>
  );
}

export default UncontrolledExample;