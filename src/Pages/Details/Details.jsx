import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const Details = () => {
  const allProducts = useLoaderData();
  const { id } = useParams();
  const showDetails = allProducts.find((product) => product._id === id);
  const { brandName, description, photo, price, productName, rating, type } =
    showDetails;

  const handleAddToCart = () => {
    fetch("https://b8a10-brandshop-server-side-ashraful2430.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(showDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Well Done!", "Product added to cart successfully!", "success");
        }
      });
  };
  return (
    <div className="pt-36 pb-36">
      <div className="grid md:grid-cols-2  max-w-5xl gap-5 mx-auto bg-base-100 shadow-xl p-3">
        <div className=" my-auto">
          <img className="w-full h-full " src={photo} alt="" />
        </div>
        <div className="">
          <h3 className="text-3xl font-semibold">{productName}</h3>
          <div className="flex justify-between items-center mt-5 mb-3">
            <div className="text-xl font-bold ">{brandName}</div>
            <div className="">
              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                {type}
              </span>
            </div>
          </div>
          <p>{description}</p>
          <p className="mt-2">
            <span className="font-semibold">Price </span>: {price}$
          </p>
          <div className="mt-2">
            <Rating
              className="text-3xl  text-amber-500"
              initialRating={rating}
              emptySymbol={<AiOutlineStar></AiOutlineStar>}
              fullSymbol={<AiFillStar></AiFillStar>}
              placeholderSymbol={<AiOutlineStar></AiOutlineStar>}
            />
          </div>
          <div>
            <button
              onClick={handleAddToCart}
              className="inline-block rounded w-full bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              href="/download"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
