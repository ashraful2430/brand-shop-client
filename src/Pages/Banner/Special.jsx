import { BiSelectMultiple, BiSupport } from 'react-icons/bi';
import { PiCubeLight } from 'react-icons/pi';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { RiSecurePaymentLine } from 'react-icons/ri';


const Special = () => {
    return (
        <>
            <section className="bg-gray-900 text-white">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                >
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">What make us specials</h2>

                        <p className="mt-4 text-gray-300">
                            At Techno trend store, we take immense pride in what sets us apart. Our commitment to excellence, unwavering dedication to customer satisfaction, and relentless pursuit of innovation are what make us truly special. Our extensive product selection, top-tier customer support, and quality assurance are just the beginning.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"

                        >
                            <div >
                                <BiSelectMultiple className='h-10 w-10 text-pink-600'></BiSelectMultiple>
                            </div>

                            <h2 className="mt-4 text-xl font-bold text-white">Unparalleled Product Selection</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                We take pride in offering an extensive range of cutting-edge PCs and smartphones, catering to tech enthusiasts, professionals, and everyone in between. Find the perfect device to match your needs and desires.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"

                        >
                            <div>
                                <BiSupport className='w-10 h-10 text-pink-600'></BiSupport>
                            </div>

                            <h2 className="mt-4 text-xl font-bold text-white">Expert Guidance and Support</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Our team of tech experts is always at your service. From recommending the ideal device to resolving your queries, count on us for knowledgeable assistance and support throughout your tech journey.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"

                        >
                            <div>
                                <PiCubeLight className='w-10 h-10 text-pink-600'></PiCubeLight>
                            </div>

                            <h2 className="mt-4 text-xl font-bold text-white">Quality Assurance</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                We stand by the quality of our products. Every PC and phone in our inventory undergoes rigorous testing to ensure top-notch performance and reliability, so you can shop with confidence.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"

                        >
                            <div>
                                <FaMoneyCheckDollar className='w-10 h-10 text-pink-600'></FaMoneyCheckDollar>
                            </div>

                            <h2 className="mt-4 text-xl font-bold text-white">Innovative Financing Options</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                We understand that investing in technology can be a significant decision. That is why we offer flexible financing solutions, making it easier for you to get your hands on the latest tech innovations.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"

                        >
                            <div>
                                <RiSecurePaymentLine className='w-10 h-10 text-pink-600'></RiSecurePaymentLine>
                            </div>

                            <h2 className="mt-4 text-xl font-bold text-white">Swift and Secure Shipping</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Experience hassle-free delivery with our efficient shipping services. Your tech gadgets will reach you in pristine condition, securely packed, and on time, so you can start enjoying them right away.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"

                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-white">Community and Resources</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Join our thriving tech community. Gain access to valuable resources, tutorials, and forums where you can learn, share, and stay updated with the tech world. We are not just a store; we are a tech hub.
                            </p>
                        </a>
                    </div>

                    <div className="mt-12 text-center">
                        <button
                            className="inline-block rounded border border-current px-8 py-3 bg-pink-600 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-white"
                            href=""
                        >
                            About us
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Special;