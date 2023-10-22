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
                loaderData?.map(singleBrand => <BrandCart key={singleBrand?._id} brandData ={singleBrand}></BrandCart> )
            }
          </div>

        </div>
       
    );
};

export default Home;

