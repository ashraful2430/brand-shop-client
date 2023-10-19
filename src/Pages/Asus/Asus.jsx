import { useLoaderData } from "react-router-dom";
import AsusDetails from "./AsusDetails";


const Asus = () => {
    const products = useLoaderData();
    const brand = 'ASUS';
    const asusDetails = products.filter(product => product.brandName.trim().toUpperCase() === brand.trim().toUpperCase());
    return (
        <div>
            <div >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-16 gap-5 max-w-6xl mx-auto">
                    {
                        asusDetails.map(details => <AsusDetails details={details} key={details._id}></AsusDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Asus;