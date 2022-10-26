import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


    export default function Pokemones() {
            const { id } = useParams();
            const [pokemon, setPokemon] = useState(null);

            useEffect(() => {
                    const getPokemon = async () => {
                            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                            const datospokemon = await res.json();
                            setPokemon(datospokemon);
                    };
                    getPokemon();
            }, [id]);


            return (
                    <div>
                            <h1>Pokemon</h1>
                            {pokemon && (
                                    <div>
                                            <h2>{pokemon.name}</h2>
                                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                    </div>
                            )}
                    </div>
                    
            );

}
