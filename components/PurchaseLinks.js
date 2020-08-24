import dynamic from "next/dynamic"

const PurchaseLink = dynamic(() => import("./PurchaseLink"));

export default function CirclePurchaseLinks(props) {

    return (
        <div className="circle-purchase-links-container">
            <div className="circle-purchase-links">
                <PurchaseLink title="Kindle" />
                <PurchaseLink title="Hardbook" />
                <PurchaseLink title="Paperback" />
            </div>
        </div>
    )
}