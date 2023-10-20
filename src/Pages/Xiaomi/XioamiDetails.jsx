
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const XioamiDetails = ({ details }) => {
    const { brandName, description, photo, price, productName, rating, type, _id } = details;
    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg  p-5">
                                <img
                                    alt="Office"
                                    src={photo}
                                    className="h-56 w-full object-cover"
                                />

                                <div className="bg-white p-2">
                                    <div >
                                        <h3 className="mt-0.5 text-lg text-gray-900">
                                            {productName}
                                        </h3>
                                    </div>
                                    <div className='flex justify-between items-center mt-5 mb-3'>
                                        <div className='text-sm font-bold '>
                                            {brandName}
                                        </div>
                                        <div className="">
                                            <span
                                                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                                            >
                                                {type}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                        {description}
                                    </p>
                                    <div className='mt-4'>
                                        <p>Price: {price}$</p>
                                    </div>
                                    <Rating className='text-3xl  text-amber-500'
                                        initialRating={rating}
                                        emptySymbol={<AiOutlineStar></AiOutlineStar>}
                                        fullSymbol={<AiFillStar></AiFillStar>}
                                        placeholderSymbol={<AiOutlineStar></AiOutlineStar>}
                                    />

                                    <div className='flex justify-between items-center mt-5'>
                                        <div>
                                            <Link to={`/update/${_id}`}>
                                                <button
                                                    className="inline-block rounded btn btn-outline px-4 py-3 text-sm font-medium  transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring "
                                                >
                                                    Update
                                                </button>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                className="inline-block rounded btn btn-outline px-4 py-3 text-sm font-medium  transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring "
                                            >
                                                Details
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

XioamiDetails.propTypes = {
    details: PropTypes.object
};

export default XioamiDetails;