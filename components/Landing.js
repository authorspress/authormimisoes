import dynamic from "next/dynamic";

import "../styles/landing.scss";
 
const Burger = dynamic(() => import("./Burger"));
const PurchaseLinks = dynamic(() => import("./PurchaseLinks"));

export default function Landing(props) {
    return (
        <div className="landing-container landing-container--styles">
            <Burger />
            <div className="landing-grid">
                <div className="landing-title-container">

                </div>
                <div className="landing-book">
                    <img className="landing-book-img" src="/bitebook.jpg" alt="The bite book by Mimi Soes Cover" />  
                </div>
                <PurchaseLinks />
            </div>
        </div>
    )
}