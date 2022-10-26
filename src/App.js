import "./styles.css";
import { useState , useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Galeria from './components/Galeria';
import Favoritos from "./views/Favoritos";
import UserContext from "./UserContext";

export default function App() {

  return (
    <div className="App">
      <UserContext.Provider value="null">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}
