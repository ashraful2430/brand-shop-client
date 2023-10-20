
import { useLoaderData } from "react-router-dom";
import LenovoDetails from "./LenovoDetails";


const Lenovo = () => {
    const products = useLoaderData();
    const brand = 'LENOVO';
    const lenovoDetails = products.filter(product => product.brandName.trim().toUpperCase() === brand.trim().toUpperCase());

    return (
        <div className="pt-32" >
            <div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://i.ibb.co/41k9M5P/lenovo-thinkpad.jpg" className="w-full  h-[600px]" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://i.ibb.co/bB2FnGq/lenovo-legion-y530-1536668244110.jpg" className="w-full h-[500px]" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://i.ibb.co/FYyB2LC/lenovo-thinkpad-e570-151091312240.jpg" className="w-full h-[500px]" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://i.ibb.co/9cZ8JGy/csm-Yoga-C930-13-9a2c24fd05.webp" className="w-full h-[500px]" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-16 gap-5 max-w-6xl mx-auto">
                {
                    lenovoDetails.map(details => <LenovoDetails details={details} key={details._id}></LenovoDetails>)
                }
            </div>
        </div>
    );
};

export default Lenovo;