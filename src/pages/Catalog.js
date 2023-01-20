import React, { useState } from "react";
import UncontrolledExample from "../components/carousel/Carousel";
import Footer from "../components/footer/Footer";
import Impressions from "../components/impress/Impressions";
import InfoPluses from "../components/info/InfoPluses";
import MyModalImpress from "../components/modal/impresses/MyModalImpress";
import MyModal from "../components/modal/MyModal";
import ModalRequest from "../components/modal/request/ModalRequest";
import Present from "../components/present/Present";
import Questions from "../components/questions/Questions";
import SaleMonth from "../components/saleMonth/SaleMonth";

const Catalog = () => {

    const [modal, setModal] = useState(false);
    const [modalImpress, setModalImpress] = useState(false);
    const [impress, setImpress] = useState('');
    
    function returnImpress(elem) {
        setImpress(elem);
    }

    return (
        <>
            <UncontrolledExample visible={modal} setVisible={setModal} />
            <InfoPluses />
            <Impressions 
                visible={modal} 
                setVisible={setModal} 
                visibleImpress={modalImpress} 
                setVisibleImpress={setModalImpress}
                returnImpress={returnImpress}
            />
            <SaleMonth visible={modal} setVisible={setModal} />
            <Present />
            <Questions />
            <Footer visible={modal} setVisible={setModal} />
            
            <MyModal visible={modal} setVisible={setModal}>
                <ModalRequest />
            </MyModal>

            <MyModal visibleImpress={modalImpress} setVisibleImpress={setModalImpress}>
                <MyModalImpress 
                    elem={impress} 
                    visibleImpress={modalImpress} 
                    setVisibleImpress={setModalImpress} 
                    visible={modal} 
                    setVisible={setModal}
                />
            </MyModal>
        </>
    );
};

export default Catalog;
