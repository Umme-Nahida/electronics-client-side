import { useLoaderData } from "react-router-dom";
import BrandCart from "../BrandCart";
import Banner from "../Banner";

const Home = () => {
    const loaderData = useLoaderData()
    console.log(loaderData)
    return (
        <div className=" ">
            <Banner></Banner>
            {/* display the 6 type of brands */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10 m-10 md:m-16 lg:m-20">
                {
                    loaderData?.map(singleBrand => <BrandCart key={singleBrand?._id} brandData={singleBrand}></BrandCart>)
                }
            </div>
            {/* about us  */}
            <div className=" lg:flex md:flex flex-cols-reverse  items-center justify-between py-5 px-10 md:py-16 md:px-10 lg:py-28 lg:px-32">
                <div>
                    <h1 className="text-4xl font-medium text-[#4388D5] mb-8 md:text-left text-center">About Us</h1>
                    {/* <h1 className="text-2xl mb-6  font-semibold text-[#49CF9E] md:text-left text-center">High Quality & Professional Yoga Club</h1> */}
                    <p className="dark:text-white text-base w-full md:w-44 lg:w-[500px] md:text-left text-center mb-5">Electronics It, founded in 1995, has a rich history of innovation and excellence in the electronics industry.The company was established by two passionate engineers, Sarah Mitchell and David Reynolds, with a vision to make cutting-edge technology accessible to everyone. What started as a small electronics store has grown into a globally recognized brand known for its commitment to quality and innovation.our mission is to empower individuals and communities by providing them with the tools to connect, explore, and create in the digital world.</p>

                </div>
                <div>
                    <img className="lg:w-full md:pl-20 pl-0" src="https://i.ibb.co/vQ63Rmk/business-background-83br7zd1i2i2o59x.jpg" alt="" />
                </div>
            </div>

            {/* our articles */}

            <div className="bg-[#E5E7EB] dark:bg-black lg:px-24 lg:py-24 md:py-10 md:px-5 py-10 px-5 ">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl mb-10  font-semibold text-[#4388D5] dark:text-white ">Our Articles</h1>
                </div>

                <div className=" shadow-xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className=" border p-8 bg-white rounded-lg text-center">
                        <figure><img src="https://i.ibb.co/6PQ8XB6/best-gaming-laptop-model-entry-header.jpg" alt="Shoes" /></figure>
                        <h1 className="text-2xl font-medium text-[#4388D5] my-4 text-center">Best Gaming Laptop Models</h1>
                        <p>Gaming laptops are compact and lightweight, allowing you to enjoy gaming on the go. Take your gaming setup to a friend's place or while traveling without the bulk of a desktop.It has also some benefits RGB Lighting and Aesthetics,immerpsive display,cooling solutions.</p>
                        <h2 className="text-base font-medium mt-4 ">Mahbub Rahman!</h2>
                    </div>
                    <div className="border p-8 bg-white  rounded-lg text-center">
                        <figure><img src="https://i.ibb.co/VJhSqKn/how-to-choose-a-hi-fi-stereo-system-entry-header.jpg" alt="Shoes" /></figure>
                        <h1 className="text-2xl font-medium text-[#4388D5]  my-4 text-center">How to choose a HI-FI stereo system</h1>
                        <p>Look for systems that provide clear, balanced, and immersive audio. Pay attention to factors like speaker quality, amplifier power, and audio formats supported for a rich listening experience.It has many more features like variety of input options, including Bluetooth, Wi-Fi, USB, and traditional analog connections, to accommodate all your devices</p>
                        <h2 className="text-base font-medium mt-4">Nazmul Hasan!</h2>
                    </div>
                    <div className="border p-8 bg-white  rounded-lg text-center">
                        <figure><img src="https://i.ibb.co/VWdwxyf/logitech-pop-keys-entry-header.jpg" alt="Shoes" /></figure>
                        <h1 className="text-2xl font-medium text-[#4388D5]  my-4 text-center">Logitech POP Keys</h1>
                        <p>Logitech POP Keys is a sleek and stylish wireless keyboard that seamlessly blends fashion with function. Designed with modern aesthetics in mind, it's not just a keyboard; it's a statement piece for your workspace. Its chic, ultra-slim design and vibrant color options are meant to complement your personal style.</p>
                        <h2 className=" text-base font-medium mt-4">Muhammad Romon!</h2>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Home;

