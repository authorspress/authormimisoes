import {useState, useEffect} from "react";

export default function CirclePurchaseLink(props) {

    const [hoverState, setHoverState] = useState(false);
    
    return (
        <a className="circle-purchase-link-container">
            <div className="circle-purchase-link" style={{
                backgroundImage: "url(" + "/circle-btn.svg" + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}></div>
            <a className="circle-purchase-link-title circle-purchase-link-title--styles">
                Kindle
            </a>
        </a>
    )
} 