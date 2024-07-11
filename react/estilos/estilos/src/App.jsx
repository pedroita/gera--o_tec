import "primereact/resources/themes/lara-light-blue/theme.css"
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

import Paths from "./routes/Paths";
import { AuthContext } from "./context/AuthContext";

        

const App = () => {
  

  return (  
    <>
        <AuthContext >
          <Paths></Paths>
        </AuthContext>    
    </>
  );
}
 
export default App;