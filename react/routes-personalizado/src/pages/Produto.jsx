import { useParams } from "react-router-dom";

const Produto = () => {
    const {nome} = useParams();
    return ( 
        <>
            <h1>Produto {nome}</h1>
           
        </>
     );
}
 
export default Produto;