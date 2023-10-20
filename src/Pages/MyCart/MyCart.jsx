import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const cartProducts = useLoaderData();
    console.log(cartProducts);
    return (
        <div>
            this is my cart section
        </div>
    );
};

export default MyCart;