import { useLoaderData } from "react-router-dom";
import XioamiDetails from "./XioamiDetails";


const Xiaomi = () => {
    const products = useLoaderData();
    const brand = 'XIAOMI';
    const xioamiDetails = products.filter(product => product.brandName.trim().toUpperCase() === brand.trim().toUpperCase());
    return (
        <div>
            <div>
                <div >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-16 gap-5 max-w-6xl mx-auto">
                        {
                            xioamiDetails.map(details => <XioamiDetails details={details} key={details._id}></XioamiDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Xiaomi;