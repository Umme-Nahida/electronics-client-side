import Swal from "sweetalert2";

const AddProduct = () => {
    const handleForm = e =>{
        // e.preventDefault()
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const type = form.type.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const newProduct = {name,brand,type,description,rating,price,photo}
        console.log(newProduct)
        fetch('http://localhost:3000/product',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Good Job',
                    'You have add product successfully',
                    'success'
                  )
            }
            e.target.reset();
           
        } )
    }


    return (
        <div className="mx-w-[1110px] mx-auto bg-[#F4F3F0] p-24 ">
            <h1 className="text-3xl font-extrabold text-center">Add a Product</h1>
            <form onSubmit={handleForm}>
                {/* form row 1*/}
                <div className="md:flex items-center gap-10 justify-center mb-8">
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee name" name="name" className="input input-bordered w-full" />
    
                        </label>
                   </div>
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter brand name" name="brand" className="input input-bordered w-full" />
                         
                        </label>
                   </div>
                 </div> 
                  {/*form row 2  */}
                <div className="md:flex items-center gap-10 justify-center mb-8">
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="enter your product type" name="type" className="input input-bordered w-full" />
                            
                        </label>
                   </div>
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter the product description" name="description" className="input input-bordered w-full" />
                        </label>
                   </div>
                 </div> 
                  {/*form row 3  */}
                <div className="md:flex items-center gap-10 justify-center mb-8">
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="your product rating" name="rating" className="input input-bordered w-full" />
                        </label>
                   </div>
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter the product price" name="price" className="input input-bordered w-full" />
                           
                        </label>
                   </div>
                 </div>  
                  {/*form row 4  */}
                <div className="">
                   <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="url" placeholder="Enter photo URL" name="photo" className="input input-bordered w-full" />
                        </label>
                   </div>
                   <input type="submit" value="Add Product" className="btn btn-block border-l-2 mt-8 bg-slate-300" />
                 </div>  
            </form>
        </div>
    );
};

export default AddProduct;