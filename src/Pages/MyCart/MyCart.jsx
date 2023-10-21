import { useLoaderData } from "react-router-dom";
import CartDetails from "./CartDetails";
import { useState } from "react";


const MyCart = () => {
    const cartProducts = useLoaderData();
    const [items, setItems] = useState(cartProducts);

    return (
        <>
            <div className="pt-20 pb-20">
                {
                    items.length == 0 ? <h1 className="text-center text-5xl font-semibold ">You have not purchased any product yet</h1> : <div className="pt-40 pb-36">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                            {
                                items.map(products => <CartDetails key={products._id} products={products} setItems={setItems} items={items}></CartDetails>)
                            }
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default MyCart;