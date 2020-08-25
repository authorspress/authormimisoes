import "../styles/burger.scss"

import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const MobileNavbar = dynamic(() => import("./MobileNavbar"));

export default function Burger(props) {
    const [burgerState, setBurgerState] = useState({
        burgerOpen: "",
        isopen: false,
        revealMenu: "",
    });

    let clickHandler = () => {
        if (burgerState.isOpen === false) {
            setBurgerState({
                burgerOpen: "open",
                isOpen: true,
                revealMenu: "reveal",
            });
        } else {
            setBurgerState({
                burgerOpen: "",
                isOpen: false,
                revealMenu: "unreveal",
            });
        }
    };

    return (
        <>
            <div className="bg-container">
                <div className="burger-container">
                    <a
                        onClick={clickHandler}
                        className={`${burgerState.burgerOpen} navicon-button burger burger--styles x`}
                    >
                        <div className="navicon"></div>
                    </a>
                </div>
                <div className="author-name-container">
                    <div className="circle-btn-container" style={{
                        backgroundImage: "url(" + "/circle-btn.svg" + ")",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}></div>
                    <h1 className="author-name author-name--styles">Mimi Soes</h1>
                </div>
                <MobileNavbar state={burgerState.revealMenu} />
            </div>
            
        </>
    )
}