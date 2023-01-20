import React, { useContext } from "react";
import { AuthContext } from "../../context";
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible, visibleImpress, setVisibleImpress}) => {

    const {valueSelect, setValueSelect} = useContext(AuthContext);

    const rootClasses= [cl.myModal];
    if(visible || visibleImpress) {
        rootClasses.push(cl.active);
    }

    function hideModal() {
        if(visible) {
            setValueSelect(0);
            setVisible(false);
        }
        if(visibleImpress) {
            setValueSelect(0);
            setVisibleImpress(false);
        }
    }

    return (
        <div className={rootClasses.join(' ')} onClick={hideModal}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>);
};

export default MyModal;
