// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const MyCart = () => {
    const userProduct = useLoaderData()
    const [product,setProduct] = useState(userProduct)
    
   console.log(userProduct)
   const handleDelete = id =>{
      console.log(id)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://assignment-ten-server-gamma-seven.vercel.app/storeProduct/${id}`,{
                method:'DELETE'  
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                     const remeaning = product.filter(data=> data._id !== id)
                     setProduct(remeaning)

                }
              })
        }
      })
    
   }
   

    return (
        <div>

            <div id="item1" className="w-full">
                <img src="https://i.ibb.co/BVLtvct/cf8c5599420499-5f09d760d115b.jpg" className="w-full h-[250px] md:h-[400px]" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 m-10 md:m-20 justify-items-center'>
            {
                product?.map(product => <div key={product?._id}>
                    {/* show the add to cart product */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={product?.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="badge badge-outline text-blue-500">brand:{product.brand} </div>
                            <h2 className="card-title text-xl md:text-2xl lg:text-2xl lg:font-semibold  text-[#FBBD23]">
                                {product?.name}
                            </h2>
                            <p className='text-blue-700 font-extrabold text-xl mb-2'>Price: {product.price}</p>
                            <div className="btn-group btn-group-vertical lg:btn-group-horizontal justify-start text-center">
                            <Link to={`/updateproduct/${product?._id}`}>
                                    <button className="btn btn-primary mr-4 w-full lg:block py-2 px-5">Update</button>
                                </Link>
                                    <button onClick={()=>handleDelete(product._id)} className="btn btn-warning w-full lg:ml-2 md:mt-2 mt-2 lg:mt-0 lg:w-auto lg:block py-2 px-5">Delete</button>
                            </div>
                        </div>
                    </div>

                </div>

                )
            }
            </div>
        </div>
    );
}


export default MyCart;
