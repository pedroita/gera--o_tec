/* eslint-disable react/prop-types */
function Main(props) {
    

    const {list1, list2} = props;
    const pokeList = [...list1, ...list2];
    
    
    console.log(pokeList);
    return ( 
        <main>
            {pokeList.map((pokemon, index) => (
                <div key={index} className='card'>
                    <img src={pokemon.sprites.front_default} alt='' />
                    <p>{pokemon.forms[0].name}</p>
                    <div>
                        {pokemon.types.map(({type:{name}}, index) =>(
                            <span key={index} className>{name}</span>
                        ))}
                    </div>
                </div>
            ))}
        </main>
    );
}

export default Main;
