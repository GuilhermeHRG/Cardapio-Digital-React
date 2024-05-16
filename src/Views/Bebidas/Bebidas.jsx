import React, { useState } from "react";
import "./Bebidas.css";
import Header from "../../Components/Header/Header";

function Bebidas() {
    const [selectedAdicionais, setSelectedAdicionais] = useState({
        cola: false,
        suco: false,
        cafe: false,
        energetico: false
    });

    const [selectedMenu, setSelectedMenu] = useState("Bebidas");

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
        <div className="mainGlobalBebidas">
            <div className="mainCardapioLancheBebidas">
                <Header />
                <div className="gridContainerBebidas">
                    <article className="menusContainerBebidas">
                        <ul className="menuOptionsBebidas">
                            <button className={selectedMenu === "Lanches" ? "selectedOptionBebidas" : ""} onClick={() => handleMenuSelect("Lanches")}>Lanches</button>
                            <button className={selectedMenu === "Bebidas" ? "selectedOptionBebidas" : ""} onClick={() => handleMenuSelect("Bebidas")}>Bebidas</button>
                            <button className={selectedMenu === "Combos" ? "selectedOptionBebidas" : ""} onClick={() => handleMenuSelect("Combos")}>Combos</button>
                            <button className={selectedMenu === "Porções" ? "selectedOptionBebidas" : ""} onClick={() => handleMenuSelect("Porções")}>Porções</button>
                        </ul>
                    </article>
                    <div className="menuAdicionalBebidas">
                        <h3>Adicionais</h3>
                        <div className="adicionaisContainerBebidas">
                            <ul >
                                <li className="adicionaisBebidas">
                                    <label htmlFor="cola">Cola</label>
                                    <input 
                                        className="checkboxBebidas"
                                        type="checkbox" 
                                        id="cola" 
                                        checked={selectedAdicionais.cola} 
                                        onChange={() => handleAdicionalChange('cola')} 
                                    />
                                </li>
                                <li className="adicionaisBebidas">
                                    <label htmlFor="suco">Suco</label>
                                    <input 
                                        className="checkboxBebidas"
                                        type="checkbox" 
                                        id="suco" 
                                        checked={selectedAdicionais.suco} 
                                        onChange={() => handleAdicionalChange('suco')} 
                                    />
                                </li>
                                <li className="adicionaisBebidas">
                                    <label htmlFor="cafe">Café</label>
                                    <input 
                                        className="checkboxBebidas"
                                        type="checkbox" 
                                        id="cafe" 
                                        checked={selectedAdicionais.cafe} 
                                        onChange={() => handleAdicionalChange('cafe')} 
                                    />
                                </li>
                                <li className="adicionaisBebidas">
                                    <label htmlFor="energetico">Energético</label>
                                    <input 
                                        className="checkboxBebidas"
                                        type="checkbox" 
                                        id="energetico" 
                                        checked={selectedAdicionais.energetico} 
                                        onChange={() => handleAdicionalChange('energetico')} 
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

export default Bebidas;
