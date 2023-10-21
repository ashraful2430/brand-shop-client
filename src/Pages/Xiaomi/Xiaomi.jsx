import { useLoaderData } from "react-router-dom";
import XioamiDetails from "./XioamiDetails";


const Xiaomi = () => {
    const products = useLoaderData();
    const brand = 'XIAOMI';
    const xioamiDetails = products.filter(product => product.brandName.trim().toUpperCase() === brand.trim().toUpperCase());
    return (
        <div className="pt-36 pb-24">
            <div>
                <div >
                    {
                        xioamiDetails.length > 0 ?
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-16 gap-5 max-w-6xl mx-auto">
                                {
                                    xioamiDetails.map(details => <XioamiDetails details={details} key={details._id}></XioamiDetails>)
                                }
                            </div> :
                            <h1 className="text-5xl text-center font-bold">Product not found</h1>

                    }

                </div>
            </div>
        </div>
    );
};

export default Xiaomi;