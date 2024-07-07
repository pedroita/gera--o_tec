import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from './components/Main/Index';

function App() {
    const [pokeList, setPokelist] = useState([]);
    const [initalCount, setInitalCount] = useState(1);
    const [finalCount, setFinalCount] = useState(10);

    async function getPokemons(){
        try {
            const pokeArray = [];
            for (let i = initalCount; i <= finalCount; i++) {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const data = await response.json();
                pokeArray.push(data);
            }
            setPokelist((state)=>[...state,...pokeArray]);
        } catch (error) {
            console.error(error);
        }
    }

    function handleGetPokemonClick(){
        setInitalCount(finalCount+1);
        setFinalCount((state)=>state+10)
    }
   

    useEffect(() => {
        getPokemons();
       
    }, [initalCount,finalCount]); // Chama as funções uma vez quando o componente é montado

    return (
        <>
            <Header/>
            <Main list={pokeList}/>
            <button  onClick={handleGetPokemonClick} className='button'>Ver mais</button>
            <footer>
                <p>&copy;Todos os direitos reservados</p>
            </footer>
        </>
    );
}

export default App;
