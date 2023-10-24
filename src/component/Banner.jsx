
const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/QY4v9vt/pngtree-commercial-electronics-store-of-many-screens-picture-image-2683696.png')] bg-no-repeat bg-cover ">
             {/* navbar */}
             <div className="py-10 px-5 md:py-12 md:px-10 lg:py-24 lg:px-28  bg-[#000000] bg-opacity-40">
            <div className=" navbar-center  text-center" data-aos ="fade-up" data-aos-duration="2000">
                <h1 className=" text-2xl md:text-4xl lg:text-6xl  mb-2 md:mb-8 text-[#ffffff] font-semibold shadow-xl">Online store of household <br /> <span className="text-xl md:text-2xl lg:text-4xl md:-mt-3">appliances and electronics</span></h1>
                <p className="text-sm md:text-base lg:text-base w-96 md:w-[700px] lg:w-[800px] mx-auto font-bold text-[#ffffff]">Our company serves as an innovation hub where some of the brightest minds in the industry collaborate to create breakthrough products. We invest heavily in research and development to stay ahead in the fast-paced electronics sector. Our products not only keep up with the latest trends but often set the trends themselves.</p>
                {/* <button className="btn btn-warning bg-[#FCA61F] rounded-full py-4 px-8 mt-10  text-[#FFFFFF]">Get Started</button> */}
            </div>
        </div>
        </div>
    );
};

export default Banner;