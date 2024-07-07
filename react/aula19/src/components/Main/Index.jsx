/* eslint-disable react/prop-types */
function Main(props) {
    

    const {list} = props;
    const pokeList = [...list];
    
    
    console.log(pokeList);
    return ( 
        <main className='card-container'>
            {pokeList.map((pokemon, index) => (
                <div key={index} className='card'>
                    <img src={pokemon.sprites.front_default} alt='' />
                    <p>{pokemon.forms[0].name}</p>
                    <div className="badge-container">
                        {pokemon.types.map(({type:{name}}, index) =>(
                            <p key={index} className="badge">{name}</p>
                        ))}
                    </div>
                </div>
            ))}
        </main>
    );
}

export default Main;
