import { Link, useLoaderData } from "react-router-dom";

const BrandProduct = () => {
    const brandproducts = useLoaderData()
    // const {name,brand,type,description,rating,price,photo} = brandproducts;
    console.log(brandproducts)

    return (
        <div>

            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/18QQ3q3/Samsung-Galaxy-S10-5-G-Key-Visual-A3-Landscape-e1557936671753.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/p0ngWgM/Apple-i-Phone.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/pL9fSvJ/tc4jf3uvip8csjfnmgxht84vw8f7.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-10 justify-center items-center justify-items-center m-40  ">
                {
                    brandproducts?.map(brandItem => <div key={brandItem._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={brandItem?.photo} alt="Shoes" className="rounded-xl w-[300px]" />
                        </figure>
                        <div className="card-body items-center ">
                            <p className="text-left">Type: {brandItem?.type}</p>
                            <h2 className="card-title">{brandItem.name}</h2>
                            
                           {/* {brandItem.description.length > 200 ? <p>brandItem.description.slice(0,200)</p> } */}
                   
                           <p>Price: {brandItem?.price}</p>
                            <p>Rating: {brandItem?.rating}</p>

                            <div className="card-actions">
                                <div className="btn-group lg:btn-group-horizontal">
                                    <Link to={`/updateproduct/${brandItem._id}`}>
                                        <button className="btn btn-primary mr-2">Update Product</button>
                                    </Link>
                                    <Link to={`/details/${brandItem?._id}`}>
                                      <button className="btn ">Details Product</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BrandProduct;