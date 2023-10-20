import { useLoaderData } from "react-router-dom";
import CartDetails from "./CartDetails";
import { useState } from "react";


const MyCart = () => {
    const cartProducts = useLoaderData();
    const [products, showProducts] = useState(cartProducts);

    return (
        <div className="pt-40 pb-36">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                {
                    products.map(products => <CartDetails key={products._id} products={products}></CartDetails>)
                }
            </div>
        </div>
    );
};

export default MyCart;