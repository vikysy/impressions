import React from "react";
import cl from "./Impressions.module.css";
import list from "./API";
import Impress from "./Impress";

const Impressions = ({visible, setVisible, visibleImpress, setVisibleImpress, returnImpress}) => {

    return (
        <div>
            <h1 className={cl.h1}>каталог впечатлений</h1>
            <div className={cl.parent}>
                {list.map((elem) => (
                    <Impress
                        key={elem.id} 
                        elem={elem}
                        visible={visible}
                        setVisible={setVisible}
                        visibleImpress={visibleImpress}
                        setVisibleImpress={setVisibleImpress}
                        returnImpress={returnImpress}
                    />
                ))}
            </div>
        </div>
    );
};

export default Impressions;