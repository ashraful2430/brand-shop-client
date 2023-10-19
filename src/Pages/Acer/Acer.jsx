import { useLoaderData } from "react-router-dom";
import AcerDetails from "./AcerDetails";


const Acer = () => {
    const products = useLoaderData();
    const brand = 'ACER';
    const acerDetails = products.filter(product => product.brandName.trim().toUpperCase() === brand.trim().toUpperCase());
    return (
        <div>
            <div >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-16 gap-5 max-w-6xl mx-auto">
                    {
                        acerDetails.map(details => <AcerDetails details={details} key={details._id}></AcerDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Acer;