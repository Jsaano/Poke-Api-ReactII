import { useState , useEffect } from "react";

export default function Favoritos() {
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

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {fotos.map((foto, index) => {
          if (!foto.liked) {
            return <div key={index} className="foto">
              <img src={foto.src.tiny} alt={foto.photographer}
                onClick={(e) => setFavoritos(index, true)}
              />
            </div>
          }
        })}
      </div>
    </div>
  );
}
