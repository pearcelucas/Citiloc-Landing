import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles, Menu } from "./components/Menu";
import { Home } from "./pages/Home";
import { Contatos } from "./pages/Contatos";
import { Page404 } from "./pages/Page404";
import { Locacao } from "./pages/Locacao";
import { Eventos } from "./pages/Eventos";
import { Card } from "./pages/styles";
import CardEventos from "./pages/Eventos copy";




export const App = () => {
  return (
    <>
     <BrowserRouter>
     <GlobalStyles/>
     <Menu/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="Locacao" element={<Locacao/>}/>
         <Route path="contatos" element={<Contatos/>}/>
         <Route path="eventos" element={<Eventos/>}/>
         <Route path="*" element={<Page404/>}/>
        </Routes>
     </BrowserRouter>
    </>
  );
}

