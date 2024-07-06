import { useState, useEffect } from 'react';

const usePokemons = (limit = 15) => {
    const [pokeList, setPokelist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPokemons = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
                const data = await response.json();
                setPokelist(data.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getPokemons();
    }, [limit]);

    return { pokeList, loading, error };
};

export default usePokemons;
