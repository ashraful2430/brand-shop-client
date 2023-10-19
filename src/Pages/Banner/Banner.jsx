

const Banner = () => {

    return (
        <div className="pt-16">

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/f2qPqGS/7510722.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold"> Your Gateway to Cutting-Edge <br /> Technology.</h1>
                        <p className="mb-5 hidden md:block">Welcome to the forefront of innovation and discovery. <br /> At Techno trend store, we are your trusted source for the latest <br /> in tech wizardry. Explore a world where possibilities are <br />limitless, and where the future unfolds before your eyes.</p>
                        <p className="mb-5 md:hidden">Welcome to the forefront of innovation and discovery.  At Techno trend store, we are your trusted source for the latestin tech wizardry. Explore a world where possibilities are <br />limitless, and where the future unfolds before your eyes.</p>
                        <a href="#scroll-section">
                            <button
                                className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-white bg-pink-600"
                                href="#scroll-section"
                            >
                                Get started
                            </button>
                        </a>

                    </div>
                </div>
            </div>
            {/* <section className="bg-gray-900 text-white">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
                >
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-gradient-to-r mb-5 from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Your Gateway to
                            <span className="sm:block"> Cutting-Edge Technology. </span>
                        </h1>

                        <div className="mt-5">
                            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                                Welcome to the forefront of innovation and discovery. At Techno trend store, we are your trusted source for the latest in tech wizardry. Explore a world where possibilities are limitless, and where the future unfolds before your eyes.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a href="#scroll-section">
                                <button
                                    className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-white bg-pink-600"
                                    href="#scroll-section"
                                >
                                    Get started
                                </button>
                            </a>


                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Banner;