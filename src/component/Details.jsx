import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
    const {user} = useContext(AuthContext)
    // const email = user.email;
    const detailsData = useLoaderData()
    console.log(detailsData)
    const {name,price,photo,brand} = detailsData
   
    const handleAddToCart = e =>{
        e.preventDefault()
        const productData = {name,price,photo,brand,email:user.email}
        console.log(productData)

        fetch('http://localhost:3000/myStore',{
            method:'POST',
            headers:{
                
                'content-type' : 'application/json'
            },
            body:JSON.stringify(productData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId > 0){
                Swal.fire(
                    'Good Job',
                    'You have add to cart product successfully',
                    'success'
                  )
            }

        })

    }

    return (
        <div className="mt-10">

            <div className=" pr-32 py-10 columns-direction md:flex md:items-center lg:flex lg:items-center shadow-xl">
                 <div className="w-full">
                   <figure><img src={detailsData.photo} alt="Movie" className="image-full" /></figure>
                 </div>
                 <div className="w-full">
                    <p className="mb-5">Type: {detailsData.type}</p>
                    <h2 className="card-title text-xl md:text-2xl lg:text-6xl lg:font-extrabolt mb-5">{detailsData.name}</h2>
                    <p className="mb-2">Description: {detailsData.description} </p>
                    <p className="mb-2 text-orange-500">Brand: {detailsData.brand} </p>
                    <p className="mb-2 text-orange-500">Rating: {detailsData.rating} </p>
                    <p className="mb-6 text-blue-700 font-extrabold lg:text-3xl">Price: {detailsData.price} </p>
                    <div className="card-actions justify-start">
                        <Link to={`/details/${detailsData?._id}`}>
                            <button onClick={handleAddToCart} className="btn btn-primary w-96">Add to cart</button>
                        </Link>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Details;