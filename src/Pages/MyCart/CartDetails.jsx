
import PropTypes from 'prop-types';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
import swal from 'sweetalert';


const CartDetails = ({ products, setItems, items }) => {
    const { brandName, photo, price, productName, rating, _id, type } = products;

    const handleDelete = _id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(` https://my-tenth-assignment-server-jzdbdk0k0.vercel.app/cart/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Poof! Your product has been deleted!", {
                                    icon: "success",
                                });
                                const remaining = items.filter(product => product._id !== _id);
                                setItems(remaining)
                            }
                        })
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className='h-[300px]' src={photo} /></figure>
                <div className="card-body">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <div >
                            <h3 className="font-bold uppercase text-gray-900">
                                {productName}
                            </h3>
                        </div>

                        <div className='flex justify-between items-center mt-5 mb-3'>
                            <div className='text-xl font-bold '>
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
            </div>

        </div>
    );
};

CartDetails.propTypes = {
    products: PropTypes.object,
    setItems: PropTypes.func,
    items: PropTypes.object
};

export default CartDetails;