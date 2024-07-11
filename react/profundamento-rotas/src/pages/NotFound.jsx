import { Link } from "react-router-dom";
const NotFound = () => {
    return (  
        <>
            <img src="https://http.cat/404" alt="404 Not Found" />
            <br />
            <Link to="/">Voltar</Link>

        </>
    );
}
 
export default NotFound;    