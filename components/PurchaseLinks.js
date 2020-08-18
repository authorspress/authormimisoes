import dynamic from "next/dynamic";

import "../styles/purchase-links.scss";

const PurchaseLink = dynamic(() => import("./PurchaseLink"));

export default function PurchaseLinks(props) {
    return (
        <div className="purchase-links-container">
            <div className="purchase-links">
                <PurchaseLink url="https://www.amazon.com/Bite-Book-Mimi-Soes-ebook/dp/B0794C9YX3/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=" title="Kindle" />
                <PurchaseLink url="https://www.amazon.com/Bite-Book-Mimi-Soes/dp/1480812684/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=" title="Hardcover" />
                <PurchaseLink url="https://www.amazon.com/Bite-Book-Mimi-Soes/dp/1480812706/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=" title="Paperback" />
            </div>
        </div>
    )
}