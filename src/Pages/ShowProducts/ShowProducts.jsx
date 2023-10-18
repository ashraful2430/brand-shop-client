
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShowProducts = ({ product }) => {
    const { id, name, category, image } = product;
    return (
        <>
            <div>
                <Link to={`/description/${id}`}>
                    <div>
                        <article
                            className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                        >
                            <div className="bg-white">
                                <img className="h-32 w-full rounded-t-xl" src={image} alt="" />
                            </div>
                            <div className=" bg-white p-4 ">
                                <div >
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                        {name}
                                    </h3>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-1">
                                    <span
                                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                                    >
                                        {category}
                                    </span>


                                </div>
                            </div>
                        </article>
                    </div>
                </Link>
            </div>
        </>
    );
};

ShowProducts.propTypes = {
    product: PropTypes.object
};

export default ShowProducts;