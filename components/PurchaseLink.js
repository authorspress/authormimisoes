import { motion } from "framer-motion";

export default function PurchaseLink(props) {
    return (
        <motion.button whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className="purchase-btn purchase-btn--styles">
            <a className="purchase-link purchase-link--styles" href={props.url}>{props.title}</a>
        </motion.button>
    )
}