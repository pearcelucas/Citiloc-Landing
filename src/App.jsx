import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles, Menu } from "./components/Menu";
import { Home } from "./pages/Home";

import { Page404 } from "./pages/Page404";






export const App = () => {
  return (
    <>
     <BrowserRouter>
     <GlobalStyles/>
     <Menu/>
       <Routes>
         <Route path="/" element={<Home/>}/>

         <Route path="*" element={<Page404/>}/>
        </Routes>
     </BrowserRouter>
    </>
  );
}

