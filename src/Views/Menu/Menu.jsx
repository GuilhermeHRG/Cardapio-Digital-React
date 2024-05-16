import React from "react";
import './Menu.css';
import Header from "../../Components/Header/Header";

function Menu() {
  return (
    <div className="principal">
      <Header/>
      <div className="containerMenuMesa">
        <div className="mainMenu">
          <button className="btnMenu">Cardapio <span class="icon">&#x1F4D6;</span> </button>
          <button className="btnMenu">Avalie <span class="icon">&#x2B50;</span> </button>
          <button className="btnMenu">Meu Pedido<span class="icon">&#x1F4DD;</span> </button>
        </div>
        <div className="mainMesa">
          <div className="conteinerMesa">
            <div className="img"></div>
          </div>
          <div className="numeroMesa">
            <p>mesa 04</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
