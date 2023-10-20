import { useLoaderData } from "react-router-dom";
import SamsungDetails from "./SamsungDetails";


const Samsung = () => {
    const products = useLoaderData();
    const brand = 'SAMSUNG';
    const samsungDetails = products.filter(product => product.brandName.trim().toUpperCase() === brand.trim().toUpperCase());
    return (
        <div className="pt-32">
            <div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://i.ibb.co/BVc2QNc/Pu2k-YW2xyjcc-Do-Htnq22za-320-80.webp" className="w-full  h-[600px]" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://i.ibb.co/yVvzPsp/5389-01.webp" className="w-full h-[500px]" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://i.ibb.co/M9DMr84/Samsung-Galaxy-Z-Fold-3.webp" className="w-full h-[500px]" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://i.ibb.co/n8yZJ8D/Samsung-Galaxy-M12-image-new.webp" className="w-full h-[500px]" />
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
                        samsungDetails.map(details => <SamsungDetails details={details} key={details._id}></SamsungDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Samsung;