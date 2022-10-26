import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const home = ()=> {
    const [id , setId] = useState("")
    const navigate = useNavigate()
    const irAlPokemon = (e) => {
        e.preventDefault()
        navigate(`/pokemon/${id}`)
    }
    
    const [pokeName, setPokeName] = useState([])


    useEffect(() => {
        const getPokemon = async () => {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
            const data = await res.json();
            console.log (data.results)

    if  (data && data.results) {
        const getPokeName = data.results.map ((data) => {
            return data.name
        })
        setPokeName(getPokeName)
        console.log (data.results.name)
    }
        }
        getPokemon()
    }, [])


    return (
        <div>
            <h1>Elija un pokemon de la lista</h1>
            <select onChange={(e) => setId (e.target.value)}> {pokeName.map((name) => <option>{name}</option>)} </select>
             <button onClick={irAlPokemon}>Ir al pokemon</button>
        </div>
    )
}

export default home