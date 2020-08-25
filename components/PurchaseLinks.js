import dynamic from "next/dynamic"

const PurchaseLink = dynamic(() => import("./PurchaseLink"));

export default function PurchaseLinks(props) {

    return (
        <div className="purchase-info-links-container">
            <div className="availiable-container amazon-available">
                <a href="https://www.amazon.com/Natural-Inclinations-Mans-Adventures-World/dp/1949735001/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1593034956&sr=1-2" className="place-link">
                    <img className="place-img" src="/amazon-logo.png" alt="amazon link to book" />
                </a>
            </div>

            <div className="availiable-container ebay-available">
                <a href="https://www.ebay.ph/itm/Natural-Inclinations-One-Mans-Adventures-in-the-Natural-World-Wauer/333486406412?hash=item4da556bb0c:g:iWgAAOSwbLJeJXZw" className="place-link">
                    <img className="place-img" src="/ebay-logo.png" alt="ebay link to book" />
                </a>
            </div>

            <div className="availiable-container book-depo-available">
                <a href="https://www.bookdepository.com/Natural-Inclinations-Roland-H-Wauer/9781949735000?ref=grid-view&qid=1593044786858&sr=1-4" className="place-link">
                    <img className="place-img" src="/bok-depositorylogo.png" alt="boook depository link to book" />
                </a>
            </div>

            <div className="availiable-container bam-available">
                <a href="https://www.booksamillion.com/p/Natural-Inclinations/Roland-H-Wauer/9781949735000?id=7930448723984#" className="place-link">
                    <img className="place-img" src="/bam-logo.png" alt="books a million link to book" />
                </a>
            </div>

            <div className="availiable-container indigo-available">
                <a className="place-link" href="https://www.chapters.indigo.ca/en-ca/books/natural-inclinations-one-mans-adventures/9781949735000-item.html?ikwid=Natural+Inclinations%3a+One&ikwsec=Home&ikwidx=1#algoliaQueryId=bdd17992c93e576d5f28c417b308ac98">
                    <img className="place-img" src="/indigo-logo.svg" alt="indigo link to book" />
                </a>
            </div>
        </div>
    )
}