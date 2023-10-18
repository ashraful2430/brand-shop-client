import Banner from "../Banner/Banner";
import Special from "../Banner/Special";
import OurProducts from "../OurProducts/OurProducts";

const Home = () => {
  return <>
    <div className="pt-8 font-sans">
      <Banner></Banner>
    </div>
    <div className="mt-16 p-6 font-sans">
      <OurProducts></OurProducts>
    </div>
    <div className="mt-16 font-sans">
      <Special></Special>
    </div>
  </>;
};

export default Home;  
