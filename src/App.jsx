import React from "react";

import Menu from "./Views/Menu/Menu";
import CardapioLanches from "./Views/Lanches/CardapioLanchesView";
import Combos from "./Views/Combos/Combos";
import Bebidas from './Views/Bebidas/Bebidas';

function App() {
  return (
    <>
    <Menu/>
     <CardapioLanches/> 
     <Combos/>
     <Bebidas/>
    </>
  );
}

export default App;
