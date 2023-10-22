
const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/kM37NPy/beautiful-photograph-wallpaper-background-853645-10508.jpg')] bg-no-repeat bg-cover ">
             {/* navbar */}
             <div className="py-10 px-5 md:py-12 md:px-10 lg:py-24 lg:px-28  bg-blue-600  bg-opacity-80">
            <div className=" navbar-center  text-center" data-aos ="fade-up" data-aos-duration="2000">
                <h1 className=" text-2xl md:text-4xl lg:text-7xl  mb-10 text-[#ecc517fb] font-semibold shadow-md">Online store of household <br /> <span className="text-xl md:text-2xl lg:text-4xl">appliances and electronics</span></h1>
                <p className="text-sm md:text-lg lg:text-lg w-96 md:w-[700px] lg:w-[800px] mx-auto font-bold text-[#fffffffb]">Our company serves as an innovation hub where some of the brightest minds in the industry collaborate to create breakthrough products. We invest heavily in research and development to stay ahead in the fast-paced electronics sector. Our products not only keep up with the latest trends but often set the trends themselves.</p>
                <button className="btn btn-warning rounded-full py-4 px-8 mt-10  text-[#FFFFFF]">GET STARTED</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;