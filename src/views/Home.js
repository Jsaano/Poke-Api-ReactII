import React, { useContext } from "react";
import Galeria from "../components/Galeria";
import UseContext from '../UserContext';

export default function Home() {
  return (
    <div id="Home">
      <h1>Natural Pic</h1>

      <Galeria />
    </div>
  );
}
