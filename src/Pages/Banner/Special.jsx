import { BiSelectMultiple, BiSupport } from "react-icons/bi";
import { PiCubeLight } from "react-icons/pi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";

const Special = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto dark:text-white">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              What make us specials
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              At Techno trend store, we take immense pride in what sets us
              apart. Our commitment to excellence, unwavering dedication to
              customer satisfaction.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4 h-full ">
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <div>
                    <BiSelectMultiple className="h-10 w-10 text-blue-600"></BiSelectMultiple>
                  </div>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Unparalleled Product Selection
                </h2>
                <p className="leading-relaxed text-base">
                  We take pride in offering an extensive range of cutting-edge
                  PCs and smartphones, catering to tech enthusiasts,
                  professionals, and everyone in between. Find the perfect
                  device to match your needs and desires.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 h-full">
              <div className="border border-gray-200 p-6 rounded-lg h-full hover:shadow-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <div>
                    <BiSupport className="w-10 h-10 text-blue-600"></BiSupport>
                  </div>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Expert Guidance and Support
                </h2>
                <p className="leading-relaxed text-base">
                  Our team of tech experts is always at your service. From
                  recommending the ideal device to resolving your queries, count
                  on us for knowledgeable assistance and support throughout your
                  tech journey. We are delighted to help you in your journey.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <div>
                    <PiCubeLight className="w-10 h-10 text-blue-600"></PiCubeLight>
                  </div>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Quality Assurance
                </h2>
                <p className="leading-relaxed text-base">
                  We stand by the quality of our products. Every PC and phone in
                  our inventory undergoes rigorous testing to ensure top-notch
                  performance and reliability, so you can shop with confidence
                  and we guaranty you the quality of the product.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <div>
                    <FaMoneyCheckDollar className="w-10 h-10 text-blue-600"></FaMoneyCheckDollar>
                  </div>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Innovative Financing Options
                </h2>
                <p className="leading-relaxed text-base">
                  We understand that investing in technology can be a
                  significant decision. That is why we offer flexible financing
                  solutions, making it easier for you to get your hands on the
                  latest tech innovations.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <div>
                    <RiSecurePaymentLine className="w-10 h-10 text-blue-600"></RiSecurePaymentLine>
                  </div>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Swift and Secure Shipping
                </h2>
                <p className="leading-relaxed text-base">
                  Experience hassle-free delivery with our efficient shipping
                  services. Your tech gadgets will reach you in pristine
                  condition, securely packed, and on time, so you can start
                  enjoying them right away.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Community and Resources
                </h2>
                <p className="leading-relaxed text-base">
                  Join our thriving tech community. Gain access to valuable
                  resources, tutorials, and forums where you can learn, share,
                  and stay updated with the tech world. We are not just a store;
                  we are a tech hub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Special;
