import React from 'react';
import './App.css';
import Home from "./Home/Home";
import RainEffect from "./RainEffect/RainEffect";
import {Route, Routes, Navigate} from "react-router-dom";
import BlobEffect from "./BlobEffect/BlobEffect";

function App() {
  return (
      <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/rain-effect"} element={<RainEffect/>} />
          <Route path={"/blob-effect"} element={<BlobEffect/>} />
          <Route path={"*"} element={<Navigate to={"/"}/>} />
      </Routes>
  );
}

export default App;
