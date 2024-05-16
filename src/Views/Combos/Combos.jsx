import React, { useState } from "react";
import "./Combos.css";
import Header from "../../Components/Header/Header";

function Combos() {
    const [selectedAdicionais, setSelectedAdicionais] = useState({
        cheddar: false,
        catupiry: false,
        bacon: false,
        queijo: false
    });

    const [selectedMenu, setSelectedMenu] = useState("Combos");

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
        <div className="mainGlobalCombos">
            <div className="mainCardapioLancheCombos">
                <Header />
                <div className="gridContainerCombos">
                    <article className="menusContainerCombos">
                        <ul className="menuOptionsCombos">
                            <button className={selectedMenu === "Lanches" ? "selectedOptionCombos" : ""} onClick={() => handleMenuSelect("Lanches")}>Lanches</button>
                            <button className={selectedMenu === "Bebidas" ? "selectedOptionCombos" : ""} onClick={() => handleMenuSelect("Bebidas")}>Bebidas</button>
                            <button className={selectedMenu === "Combos" ? "selectedOptionCombos" : ""} onClick={() => handleMenuSelect("Combos")}>Combos</button>
                            <button className={selectedMenu === "Porções" ? "selectedOptionCombos" : ""} onClick={() => handleMenuSelect("Porções")}>Porções</button>
                        </ul>
                    </article>
                    <div className="menuAdicionalCombos">
                        <h3>Adicionais</h3>
                        <div className="adicionaisContainerCombos">
                            <ul >
                                <li className="adicionaisCombos">
                                    <label htmlFor="cheddar">Cheddar</label>
                                    <input 
                                        className="checkboxCombos"
                                        type="checkbox" 
                                        id="cheddar" 
                                        checked={selectedAdicionais.cheddar} 
                                        onChange={() => handleAdicionalChange('cheddar')} 
                                    />
                                </li>
                                <li className="adicionaisCombos">
                                    <label htmlFor="catupiry">Catupiry</label>
                                    <input 
                                        className="checkboxCombos"
                                        type="checkbox" 
                                        id="catupiry" 
                                        checked={selectedAdicionais.catupiry} 
                                        onChange={() => handleAdicionalChange('catupiry')} 
                                    />
                                </li>
                                <li className="adicionaisCombos">
                                    <label htmlFor="bacon">Bacon</label>
                                    <input 
                                        className="checkboxCombos"
                                        type="checkbox" 
                                        id="bacon" 
                                        checked={selectedAdicionais.bacon} 
                                        onChange={() => handleAdicionalChange('bacon')} 
                                    />
                                </li>
                                <li className="adicionaisCombos">
                                    <label htmlFor="queijo">Queijo</label>
                                    <input 
                                        className="checkboxCombos"
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

export default Combos;
