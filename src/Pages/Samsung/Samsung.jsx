import { useLoaderData } from "react-router-dom";
import SamsungDetails from "./SamsungDetails";


const Samsung = () => {
    const products = useLoaderData();
    const brand = 'SAMSUNG';
    const samsungDetails = products.filter(product => product.brandName.trim().toUpperCase() === brand.trim().toUpperCase());
    return (
        <div>
            <div >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-16 gap-5 max-w-6xl mx-auto">
                    {
                        samsungDetails.map(details => <SamsungDetails details={details} key={details._id}></SamsungDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Samsung;