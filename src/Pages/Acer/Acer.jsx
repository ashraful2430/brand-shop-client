import { useLoaderData } from "react-router-dom";
import AcerDetails from "./AcerDetails";


const Acer = () => {
    const products = useLoaderData();
    const brand = 'ACER';
    const acerDetails = products.filter(product => product.brandName.trim().toUpperCase() === brand.trim().toUpperCase());
    return (
        <div className="pt-32">
            <div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://i.ibb.co/185SZbt/71vv-XGmd-KWL.webp" className="w-full  h-[600px]" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://i.ibb.co/0mnym12/779ee72f-872f-4e6d-991e-a8feb81efd95-CR0-0-800-600-PT0-SX800-V1.webp" className="w-full h-[500px]" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://i.ibb.co/p0SzQ7x/acer-chromebook-317-02.webp" className="w-full h-[500px]" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://i.ibb.co/khWSGtk/71-Yktz-Gi-St-L.webp" className="w-full h-[500px]" />
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
                        acerDetails.map(details => <AcerDetails details={details} key={details._id}></AcerDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Acer;