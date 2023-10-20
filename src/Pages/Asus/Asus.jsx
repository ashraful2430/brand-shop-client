import { useLoaderData } from "react-router-dom";
import AsusDetails from "./AsusDetails";


const Asus = () => {
    const products = useLoaderData();
    const brand = 'ASUS';
    const asusDetails = products.filter(product => product.brandName.trim().toUpperCase() === brand.trim().toUpperCase());
    return (
        <div className="pt-36">
            <div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://i.ibb.co/D4wWYPh/rcd-audio-1280.webp" className="w-full  h-[600px]" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://i.ibb.co/QPpdSrH/g8-GGGfhoxc3-Sb-Qa6-Pe-Diuk-320-80.webp" className="w-full h-[500px]" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://i.ibb.co/jHRHPPD/Fuix-Xxu-QHux-YP6-DCNCFr-AB-480-80.webp" className="w-full h-[500px]" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://i.ibb.co/YZMZZpx/carousel-4-1.webp" className="w-full h-[500px]" />
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16  gap-5 max-w-6xl mx-auto">
                    {
                        asusDetails.map(details => <AsusDetails details={details} key={details._id}></AsusDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Asus;