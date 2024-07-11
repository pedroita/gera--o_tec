import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
const PageLayouts = () => {
    return ( 
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
     );
}
 
export default PageLayouts;