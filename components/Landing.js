import dynamic from "next/dynamic";

import "../styles/landing.scss";

const Burger = dynamic(() => import("./Burger"));
const BookInfo = dynamic(() => import("./BookInfo"));

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
                </div>
            </div>
        </div>
    )
}