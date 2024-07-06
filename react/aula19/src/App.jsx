import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from './components/Main/Index';

function App() {
    const [pokeList1, setPokelist1] = useState([]);
    const [pokeList2, setPokelist2] = useState([]);

    async function getFirst10Pokemons(){
        try {
            const pokeArray = [];
            for (let i = 1; i <= 10; i++) {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const data = await response.json();
                pokeArray.push(data);
            }
            console.log(pokeArray);
            setPokelist1(pokeArray);
        } catch (error) {
            console.error(error);
        }
    }

    async function getNext10Pokemons(){
        try {
            const pokeArray = [];
            for (let i = 11; i <= 20; i++) {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const data = await response.json();
                pokeArray.push(data);
            }
            console.log(pokeArray);
            setPokelist2(pokeArray);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getFirst10Pokemons();
        getNext10Pokemons();
    }, []); // Chama as funções uma vez quando o componente é montado

    return (
        <>
            <Header/>
            <Main list1={pokeList1} list2={pokeList2}/>
        </>
    );
}

export default App;
