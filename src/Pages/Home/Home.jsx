import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Special from "../Banner/Special";
import OurProducts from "../OurProducts/OurProducts";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  const allProducts = useLoaderData();
  return <>
    <div className="pt-8 font-sans">
      <Banner></Banner>
    </div>
    <div className="mt-16 p-6 font-sans">
      <OurProducts allProducts={allProducts}></OurProducts>
    </div>
    <div className="mt-16 font-sans">
      <Special></Special>
    </div>
    <div className="mt-16 font-sans">
      <Testimonial></Testimonial>
    </div>
  </>;
};

export default Home;  
