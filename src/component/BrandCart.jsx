import { Link } from "react-router-dom";

const BrandCart = ({ brandData }) => {
    // console.log(brandData)
    return (
        <div>
            
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={brandData.image} alt="Shoes" className="image-full" /></figure>
                    <div className="w-full p-10">
                        <h2 className="card-title">{brandData.name}</h2>
                        <Link to={`/brand/${brandData._id}`}>
                            <p> Brand: {brandData?.brand}</p>
                        </Link>
                        <div className="card-actions justify-start mt-5">
                        <Link to= {`/brandproducts/${brandData?.brand}`}>
                          <button className="btn btn-primary">View Product</button>
                        </Link>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default BrandCart;