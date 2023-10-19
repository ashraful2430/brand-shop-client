
import { useLoaderData } from "react-router-dom";
import LenovoDetails from "./LenovoDetails";


const Lenovo = () => {
    const products = useLoaderData();
    const brand = 'LENOVO';
    const lenovoDetails = products.filter(product => product.brandName.trim().toUpperCase() === brand.trim().toUpperCase());

    return (
        <div >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-16 gap-5 max-w-6xl mx-auto">
                {
                    lenovoDetails.map(details => <LenovoDetails details={details} key={details._id}></LenovoDetails>)
                }
            </div>
        </div>
    );
};

export default Lenovo;