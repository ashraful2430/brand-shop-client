import Banner from "../Banner/Banner";
import OurProducts from "../OurProducts/OurProducts";

const Home = () => {
  return <>
    <div className="pt-8 font-sans">
      <Banner></Banner>
    </div>
    <div className="mt-16 p-6 font-sans">
      <OurProducts></OurProducts>
    </div>
  </>;
};

export default Home;  
