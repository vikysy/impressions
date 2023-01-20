import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./components/NaviBar";
import { AuthContext } from "./context";
import { useState } from "react";

function App() {

    const [valueSelect, setValueSelect] = useState(0);

    return (
        <AuthContext.Provider
            value={{
                valueSelect,
                setValueSelect: setValueSelect,
            }}
        >
            <NaviBar />
        </AuthContext.Provider>
    );
}

export default App;
