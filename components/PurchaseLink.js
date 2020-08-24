import {useState, useEffect} from "react";

export default function PurchaseLink(props) {

    const [hoverState, setHoverState] = useState(false);
    
    return (
        <a className="purchase-link-btn purchase-link-btn--styles">
                {props.title}
        </a>
    )
} 