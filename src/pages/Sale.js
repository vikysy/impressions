import React from "react";
import list from '../components/impress/API.js';
import Impress from '../components/impress/Impress';

const Sale = ({elem, visible, setVisible, visibleImpress, setVisibleImpress, returnImpress}) => {
    return (<div style={{display: 'flex', gap: '30px', justifyContent: 'center',flexWrap: 'wrap'}}>
        {list.map(elem => elem.sale && <Impress 
            key={elem.id} 
            elem={elem}
            visible={visible}
            setVisible={setVisible}
            visibleImpress={visibleImpress}
            setVisibleImpress={setVisibleImpress}
            returnImpress={returnImpress}
        />)}
    </div>);
};

export default Sale;
