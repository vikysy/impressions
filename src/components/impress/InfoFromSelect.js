import React, { useContext } from "react";
import { AuthContext } from "../../context";

const InfoFromSelect = ({divOne, divTwo}) => {
    const {valueSelect, setValueSelect} = useContext(AuthContext);

    return <div>
        {valueSelect == 0 && divOne}
        {valueSelect == 1 && divTwo}
    </div>;
};

export default InfoFromSelect;
