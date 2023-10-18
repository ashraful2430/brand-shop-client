
import PropTypes from 'prop-types';
import ShowProducts from '../ShowProducts/ShowProducts';

const OurProducts = ({ allProducts }) => {
    return (
        <>

            <section id="scroll-section">
                <div className="mb-10 text-center">
                    <h3 className="text-4xl font-bold md:text-5xl ">Our products</h3>
                    <p className="mt-4 hidden md:block font-medium">Discover the Future in Your Hands!
                        <br />
                        Explore our premium selection of cutting-edge PCs and
                        <br />
                        smartphones that empower you to work, play, and connect like never before. </p>
                    <p className="mt-4 md:hidden block font-medium">Discover the Future in Your Hands! Explore our premium selection of cutting-edge PCs and smartphones that empower you to work, play, and connect like never before. </p>

                    <div className='max-w-screen-xl mx-auto mt-12'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                allProducts.map(product => <ShowProducts key={product.id} product={product}></ShowProducts>)
                            }
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

OurProducts.propTypes = {
    allProducts: PropTypes.array
};

export default OurProducts;