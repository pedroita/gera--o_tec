import { Link } from "react-router-dom";

const Produtos = () => {
    return ( 
        <>
            <h1>Produtos</h1>
            <ul>
                <li><Link to={"/produto/1/Abacate"}>Abacate</Link></li>
                <li><Link to={"/produto/2/Banana"}>Banana</Link></li>
                <li><Link to={"/produto/3/Cenoura"}>Cenoura</Link></li>
                <li><Link to={"/produto/4/Espinafre"}>Espinafre</Link></li>
                <li><Link to={"/produto/5/Framboesa"}  >Framboesa</Link></li>
            </ul>
        </>
     );
}

export default Produtos;