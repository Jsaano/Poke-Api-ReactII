import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar  from "./components/Navbar";
import Home from "./components/Home";
import Pokemones from "./Pokemones";

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pokemon/:id" element={< Pokemones />} />
      </Routes>
    </BrowserRouter>
  );
}

