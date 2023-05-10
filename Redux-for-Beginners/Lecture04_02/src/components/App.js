import React from "react";
import { HashRouter,Routes,Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/:id" exact element={<Detail />} />
            </Routes>
        </HashRouter>

    )
}

export default App;