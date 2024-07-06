import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";

function App() {
    const [pokeList, setPokelist] = useState([]);

    async function getPokemons(){
        try {
            const pokeArray = [];
            for (let i = 1; i <= 10; i++) {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const data = await response.json();
                pokeArray.push(data);
            }
            console.log(pokeArray);
            setPokelist(pokeArray);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPokemons();
    }, []); // Chama getPokemons uma vez quando o componente é montado

    return (
        <>
            <Header/>
            <main>
                
                    {pokeList.map((pokemon, index) => (
                        <div key={index} className='card'>
                            <img src={pokemon.sprites.front_default} alt=''></img>
                            <p>                            {pokemon.forms[0].name}
                            </p>
                        </div>
                    ))}
                
            </main>
        </>
    );
}

export default App;
