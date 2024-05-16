import React, { useState } from "react";
import "./CardapioLanchesView.css";
import Header from "../../Components/Header/Header";

function CardapioLanchesView() {
    const [selectedAdicionais, setSelectedAdicionais] = useState({
        cheddar: false,
        catupiry: false,
        bacon: false,
        queijo: false
    });

    const [selectedMenu, setSelectedMenu] = useState("Lanches");

    const handleAdicionalChange = (adicional) => {
        setSelectedAdicionais(prevState => ({
            ...prevState,
            [adicional]: !prevState[adicional]
        }));
    };

    const handleMenuSelect = (menu) => {
        setSelectedMenu(menu);
    };

    return (
        <div className="mainGlobalLanches">
            <div className="mainCardapioLancheLanches">
                <Header />
                <div className="gridContainerLanches">
                    <article className="menusContainerLanches">
                        <ul className="menuOptionsLanches">
                            <li className={selectedMenu === "Lanches" ? "selectedOptionLanches" : ""} onClick={() => handleMenuSelect("Lanches")}>Lanches</li>
                            <li className={selectedMenu === "Bebidas" ? "selectedOptionLanches" : ""} onClick={() => handleMenuSelect("Bebidas")}>Bebidas</li>
                            <li className={selectedMenu === "Combos" ? "selectedOptionLanches" : ""} onClick={() => handleMenuSelect("Combos")}>Combos</li>
                            <li className={selectedMenu === "Porções" ? "selectedOptionLanches" : ""} onClick={() => handleMenuSelect("Porções")}>Porções</li>
                        </ul>
                    </article>
                    <div className="menuAdicionalLanches">
                        <h3>Adicionais</h3>
                        <div className="adicionaisContainerLanches">
                            <ul>
                                <li className="adicionaisLanches">
                                    <label htmlFor="cheddar">Cheddar</label>
                                    <input 
                                        className="checkboxLanches"
                                        type="checkbox" 
                                        id="cheddar" 
                                        checked={selectedAdicionais.cheddar} 
                                        onChange={() => handleAdicionalChange('cheddar')} 
                                    />
                                </li>
                                <li className="adicionaisLanches">
                                    <label htmlFor="catupiry">Catupiry</label>
                                    <input 
                                        className="checkboxLanches"
                                        type="checkbox" 
                                        id="catupiry" 
                                        checked={selectedAdicionais.catupiry} 
                                        onChange={() => handleAdicionalChange('catupiry')} 
                                    />
                                </li>
                                <li className="adicionaisLanches">
                                    <label htmlFor="bacon">Bacon</label>
                                    <input 
                                        className="checkboxLanches"
                                        type="checkbox" 
                                        id="bacon" 
                                        checked={selectedAdicionais.bacon} 
                                        onChange={() => handleAdicionalChange('bacon')} 
                                    />
                                </li>
                                <li className="adicionaisLanches">
                                    <label htmlFor="queijo">Queijo</label>
                                    <input 
                                        className="checkboxLanches"
                                        type="checkbox" 
                                        id="queijo" 
                                        checked={selectedAdicionais.queijo} 
                                        onChange={() => handleAdicionalChange('queijo')} 
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardapioLanchesView;
