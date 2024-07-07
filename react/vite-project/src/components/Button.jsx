import {  useState } from "react";

const Button = () => {
    const [contado, setContado] = useState(0);

    
    return (  
        <button onClick={()=>setContado(contado+1)}>Clica aqui {contado}</button>
    );
}
 
export default Button;
