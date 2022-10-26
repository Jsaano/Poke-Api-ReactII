import { useState , useEffect } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";

export default function Home() {
  const endpoint = "/fotos.json";
  const [fotos, setFotos, liked, setValue] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setFotos(data.photos);
      });
  }, []);

  const updateValue = (index, value) => {
    fotos[index].liked = value
  }

  return (
    <div className="galeria grid-columns-4 p-3">
      {
      fotos.map((foto, index) => {
        if (!foto.liked) {
          return <div key={index} className="foto">
            <img src={foto.src.tiny} alt={foto.photographer}
              onClick={(e) => updateValue(index, true)}
            />
          </div>
        }
      })}
    </div>
  );
}