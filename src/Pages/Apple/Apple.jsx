import { useLoaderData } from "react-router-dom";
import AppleDetails from "./AppleDetails";


const Apple = () => {
    const products = useLoaderData();
    const brand = 'APPLE';
    const appleDetails = products.filter(product => product.brandName.trim().toUpperCase() === brand.trim().toUpperCase());
    return (
        <div className="pt-32">
            <div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://i.ibb.co/VQtvbgX/61-Bwn-RDk-Yd-L.webp" className="w-full  h-[600px]" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://i.ibb.co/h8fGYmr/iphone12black.webp" className="w-full h-[500px]" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://i.ibb.co/pyRx94V/i-Phone-SE-3.webp" className="w-full h-[500px]" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://i.ibb.co/fD4Jdnx/photo-1575695342320-d2d2d2f9b73f.jpg" className="w-full h-[500px]" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
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