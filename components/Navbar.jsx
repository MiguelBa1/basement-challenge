import Image from "next/image";
import CartContext from "../context/cart/CartContext";
import { useContext } from "react";

import miniLogo from "../public/mini-logo.svg";
import logo from "../public/logo.svg";
import hd_4k from "../public/hd-4k.svg";

const Nabvar = () => {
    const { cartItems, showHideCart } = useContext(CartContext);
    return (
        <nav className="flex justify-between p-4 md:p-5">
            <div className="hidden sm:inline">
                <Image alt="Basement logo" src={logo} />
            </div>
            <div className="sm:hidden">
                <Image alt="Basement mini logo" src={miniLogo} />
            </div>
            <div className="hidden md:inline">
                <Image alt="Quality logos" className="hidden" src={hd_4k} />
            </div>
            <button 
                className="border-2 rounded-3xl px-5"
                onClick={() => showHideCart()}
            >
                CART(<span>{cartItems.length}</span>)
            </button>
        </nav>
    )
}
export default Nabvar