import dynamic from "next/dynamic";

import "../styles/book-info.scss"

const CirclePurchaseLinks = dynamic(() => import("./CirclePurchaseLinks"));

export default function BookInfo(props) {
    return (
        <div className="book-info-container">
            <div className="book-info-title-container">
                <h1 className="book-info-title book-info-title--styles">
                    THE BITE BOOK
                </h1>
            </div>

            <div className="author-info-title-container">
                <h2 className="author-info-title author-info-title--styles">
                    BY MIMI SOES
                </h2>
            </div>

            <div className="summary-info-container">
                <p className="summary-info--styles">
                    The 'Bite Book' offers a seasoned childhood educator's view on biting children, ways to prevent such behavior, and encouragement for parents and teachers that a little understanding, awareness, cooperation, and patience goes a long way when dealing with problematic behavior in children.
                </p>
            </div>

            <div className="purchase-info-title-container">
                <h1 className="purchase-info-title purchase-info-title--styles">
                    BUY THE BOOK ON AMAZON
                </h1>
            </div>

            <div className="purchase-info-links-container">
                <CirclePurchaseLinks />
            </div>
        </div>
    )
}