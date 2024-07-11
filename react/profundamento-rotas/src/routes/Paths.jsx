import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayouts from "../layouts/PageLayouts";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Abount from "../pages/Abount";
import Contact from "../pages/Contact";
import { Suspense } from "react";
const Paths = () => {
    return (  
        <>
            <BrowserRouter>
                <Suspense>
                <Routes>
                    <Route path="/" element={<PageLayouts/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/abount" element={<Abount/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>

                    
                </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;