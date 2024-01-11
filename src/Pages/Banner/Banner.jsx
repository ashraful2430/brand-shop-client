const Banner = () => {
  return (
    <div className="pt-16">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/xjvg7p7/laptop-near-smartphone-tags-tablet-packet.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              {" "}
              Your Gateway to Cutting-Edge <br /> Technology.
            </h1>
            <p className="mb-5 hidden md:block">
              Welcome to the forefront of innovation and discovery. <br /> At
              Techno trend store, we are your trusted source for the latest{" "}
              <br /> in tech wizardry. Explore a world where possibilities are{" "}
              <br />
              limitless, and where the future unfolds before your eyes.
            </p>
            <p className="mb-5 md:hidden">
              Welcome to the forefront of innovation and discovery. At Techno
              trend store, we are your trusted source for the latestin tech
              wizardry. Explore a world where possibilities are <br />
              limitless, and where the future unfolds before your eyes.
            </p>
            <a href="#scroll-section">
              <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Shop Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
