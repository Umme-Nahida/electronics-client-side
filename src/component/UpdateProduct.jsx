import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const updateProducts = useLoaderData()
    console.log(updateProducts)
    const {_id,name,brand,type,rating,price,photo} = updateProducts
    const navigate = useNavigate()
   
    const handleUpdateForm  = e =>{
        // e.preventDefault()
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const updateProduct = {name,brand,type,rating,price,photo}
        console.log(updateProduct)

        fetch(`https://assignment-ten-server-gamma-seven.vercel.app/update/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire(
                    'Good Job',
                    'You have update product successfully',
                    'success'
                  )
            }
            e.target.reset();
            navigate(`/brandproducts/${brand}`)
           
        } )
    }
   

    return (
        <div className="mx-w-[1110px] mx-auto bg-[#F4F3F0] p-5 md:p-24 ">
            <h1 className="text-3xl font-extrabold text-center">Update a Product</h1>
            <form onSubmit={handleUpdateForm}>
                {/* form row 1*/}
                <div className="md:flex items-center gap-10 justify-center mb-8">
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter the name" name="name" defaultValue={name} className="input input-bordered w-full" />
    
                        </label>
                   </div>
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter brand name" name="brand" defaultValue={brand} className="input input-bordered w-full" />
                         
                        </label>
                   </div>
                 </div> 
                  {/*form row 2  */}
                <div className="md:flex items-center gap-10 justify-center  md:mb-8">
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="enter your product type" name="type" defaultValue={type} className="input input-bordered w-full" />
                            
                        </label>
                   </div>
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="url" placeholder="Enter photo URL" name="photo" defaultValue={photo} className="input input-bordered w-full" />
                        </label>
                   </div>
                 </div> 
                  {/*form row 3  */}
                <div className="md:flex items-center gap-10 justify-center md:mb-8">
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="your product rating" name="rating" defaultValue={rating} className="input input-bordered w-full" />
                        </label>
                   </div>
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter the product price" name="price" defaultValue={price} className="input input-bordered w-full" />
                           
                        </label>
                   </div>
                 </div>  
                  {/*form row 4  */}
                <div className="">
                   <input type="submit" value="Submit" className="btn btn-block border-l-2 mt-5 md:mt-8 bg-slate-300" />
                 </div>  
            </form>
        </div>
    );
};

export default UpdateProduct;