
import "../styles/mobile-navbar.scss";
import { useState } from "react";

export default function MobileNavbar(props) {
    const [revealMenu, revealMenuState] = useState("");

    return (
        <div className={`${props.state} mobile-navbar-container`}>
            <div className="mobile-navbar">
                <a href="#home" className={`mobile-link mobile-link--styles`}>Home</a>
                <a href="#books" className={`mobile-link mobile-link--styles`}>Book</a>
                <a href="#author" className={`mobile-link mobile-link--styles`}>Author</a>
                <a href="#photos" className={`mobile-link mobile-link--styles`}>Photos</a>
            </div>
        </div>
    );
}
