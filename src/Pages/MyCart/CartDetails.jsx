
import PropTypes from 'prop-types';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
import swal from 'sweetalert';


const CartDetails = ({ products }) => {
    const { brandName, photo, price, productName, rating, _id } = products;

    const handleDelete = _id => {

        // fetch(`http://localhost:5000/cart/${_id}`, {
        //     method: 'DELETE'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);

        //     })
        console.log(_id);

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/cart/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Poof! Your product has been deleted!", {
                                    icon: "success",
                                });
                            }
                        })
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

    return (
        <div>
            <article className="flex bg-white transition shadow-xl hover:shadow-2xl h-72">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">

                </div>

                <div className="hidden sm:block sm:basis-56">
                    <img
                        alt="Guitar"
                        src={photo}
                        className="aspect-square h-full w-full object-cover"
                    />
                </div>


                <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <div >
                            <h3 className="font-bold uppercase text-gray-900">
                                {productName}
                            </h3>
                        </div>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed font-semibold text-gray-700">
                            Brand :{brandName}
                        </p>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed font-semibold text-gray-700">
                            Price :{price}$
                        </p>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed font-semibold text-gray-700">
                            <Rating className='text-sm  text-amber-500'
                                initialRating={rating}
                                emptySymbol={<AiOutlineStar></AiOutlineStar>}
                                fullSymbol={<AiFillStar></AiFillStar>}
                                placeholderSymbol={<AiOutlineStar></AiOutlineStar>}
                            />
                        </p>
                    </div>


                    <div className="px-2 pb-2">
                        <button onClick={() => handleDelete(_id)} className="btn btn-outline  w-full">Delete</button>
                    </div>
                </div>
            </article>
        </div>
    );
};

CartDetails.propTypes = {
    products: PropTypes.object
};

export default CartDetails;