

const Banner = () => {
    document.querySelector('button[href="#scroll-section"]').addEventListener('click', (event) => {
        event.preventDefault();

        const targetSection = document.querySelector('#scroll-section');
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth',
            });
        }
    });
    return (
        <div>
            <section className="bg-gray-900 text-white">
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
                                    className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-white"
                                    href="#scroll-section"
                                >
                                    Get started
                                </button>
                            </a>

                            <button
                                className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-white"
                                href=""
                            >
                                About us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;