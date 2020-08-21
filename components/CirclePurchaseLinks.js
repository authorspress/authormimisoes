import dynamic from "next/dynamic"

const CirclePurchaseLink = dynamic(() => import("./CirclePurchaseLink"));

export default function CirclePurchaseLinks(props) {

    return (
        <div className="circle-purchase-links-container">
            <div className="circle-purchase-links">
                <CirclePurchaseLink />
            </div>
        </div>
    )
}