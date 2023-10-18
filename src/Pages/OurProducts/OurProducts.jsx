

const OurProducts = () => {
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

                </div>
                <div className="mt-12 mb-10 max-w-screen-xl mx-auto">
                    <h3 className="text-3xl md:text-4xl font-bold">Our Computer Brands</h3>
                    <p className="mt-3 font-medium">Discover a world of innovation and performance with our handpicked selection of top PC brands.</p>
                </div>

                <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto ">
                    {/* lenevo */}
                    <div>
                        <article
                            className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                        >
                            <div className="h-full">
                                <img className="h-28 w-full rounded-t-xl" src="https://i.ibb.co/0Vd8Dyf/lenovo-logo-3.png" alt="" />
                            </div>
                            <div className=" bg-white p-4  sm:p-6">
                                <div>
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                        Lenovo
                                    </h3>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-1">
                                    <span
                                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                                    >
                                        Computer
                                    </span>


                                </div>
                            </div>
                        </article>
                    </div>
                    {/* Asus */}
                    <div>
                        <article
                            className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                        >
                            <div className="h-full">
                                <img className="h-32 w-full rounded-t-xl" src="https://i.ibb.co/DKBN4cP/asus-logo.png" alt="" />
                            </div>
                            <div className=" bg-white p-4 ">
                                <div >
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                        Asus
                                    </h3>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-1">
                                    <span
                                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                                    >
                                        Computer
                                    </span>


                                </div>
                            </div>
                        </article>
                    </div>
                    {/* Acer */}
                    <div>
                        <article
                            className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                        >
                            <div className="h-full bg-white">
                                <img className="h-32 w-full rounded-t-xl" src="https://i.ibb.co/M1kf2RY/acer.png" alt="" />
                            </div>
                            <div className=" bg-white p-4 ">
                                <div>
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                        Acer
                                    </h3>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-1">
                                    <span
                                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                                    >
                                        Computer
                                    </span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>




                <div className="mt-12 mb-10 max-w-screen-xl mx-auto ">
                    <h3 className="text-3xl md:text-4xl font-bold">Our Phones Brands</h3>
                    <p className="mt-3 font-medium">Discover a world of innovation and performance with our handpicked selection of top Phone brands.</p>
                </div>
                <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto mt-10">
                    {/* Apple */}
                    <div>
                        <article
                            className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                        >
                            <div className="h-full">
                                <img className="h-28 w-full rounded-t-xl " src="https://i.ibb.co/mhCfyjH/apple-7446229-1280.png" alt="" />
                            </div>
                            <div className=" bg-white p-4  sm:p-6">
                                <div href="#">
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                        Apple
                                    </h3>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-1">
                                    <span
                                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                                    >
                                        Phone
                                    </span>


                                </div>
                            </div>
                        </article>
                    </div>
                    {/* Samsung */}
                    <div>
                        <article
                            className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                        >
                            <div className="h-full bg-white">
                                <img className="h-32 w-full rounded-t-xl" src="https://i.ibb.co/17gyFHQ/samsung-logo.png" alt="" />
                            </div>
                            <div className=" bg-white p-4 ">
                                <div >
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                        Samsung
                                    </h3>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-1">
                                    <span
                                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                                    >
                                        Phone
                                    </span>


                                </div>
                            </div>
                        </article>
                    </div>
                    {/* Xiaomi */}
                    <div>
                        <article
                            className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                        >
                            <div className="h-full">
                                <img className="h-32 w-full rounded-t-xl" src="https://i.ibb.co/G0RvyMF/xiaomi-logo-5.png" alt="" />
                            </div>
                            <div className=" bg-white p-4 ">
                                <div href="#">
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                        Xiaomi
                                    </h3>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-1">
                                    <span
                                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                                    >
                                        Phone
                                    </span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

            </section>
        </>
    );
};

export default OurProducts;