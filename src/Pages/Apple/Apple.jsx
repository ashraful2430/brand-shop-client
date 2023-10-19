import { useLoaderData } from "react-router-dom";
import AppleDetails from "./AppleDetails";


const Apple = () => {
    const products = useLoaderData();
    const brand = 'APPLE';
    const appleDetails = products.filter(product => product.brandName.trim().toUpperCase() === brand.trim().toUpperCase());
    return (
        <div>
            <div >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-16 gap-5 max-w-6xl mx-auto">
                    {
                        appleDetails.map(details => <AppleDetails details={details} key={details._id}></AppleDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Apple;