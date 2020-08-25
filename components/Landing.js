import dynamic from "next/dynamic";

import "../styles/landing.scss";

const Burger = dynamic(() => import("./Burger"));
const BookInfo = dynamic(() => import("./BookInfo"));
const PurchaseLinks = dynamic(() => import("./PurchaseLinks"));

export default function Landing(props) {
    return (
        <div className="landing-container landing-container--styles">
            <Burger />
            <div className="landing-info-flex">
                <div className="landing-grid">
                    <BookInfo />
                    <div className="landing-book">
                        <img className="landing-book-img" src="/bitebook.jpg" alt="The bite book by Mimi Soes Cover" />
                    </div>
                    <h1 className="book-available-here-title book-available-here-title--styles">
                        BOOK AVAILABLE HERE
                    </h1>
                    <div className="mobile-purchase-info-links-container-flex">
                            <PurchaseLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}