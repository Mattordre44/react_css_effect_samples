import React from 'react';
import './App.css';
import Home from "./Home/Home";
import RainEffect from "./RainEffect/RainEffect";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/rain-effect"} element={<RainEffect/>} />
      </Routes>
  );
}

export default App;
