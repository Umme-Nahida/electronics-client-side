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
           <div className="md:grid grid-cols-3 gap-10 lg:m-20">
            {
                loaderData?.map(singleBrand => <BrandCart key={singleBrand?._id} brandData ={singleBrand}></BrandCart> )
            }
          </div>

        </div>
       
    );
};

export default Home;

