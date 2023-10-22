import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const [showPassword,setShowpassword]  = useState(false)
    const navigate = useNavigate()
    const {signInUser} = useContext(AuthContext)

    const handleLogin = e =>{
        e.preventDefault();
         const form = new FormData(e.currentTarget)
         const email = form.get('email')
         const password = form.get('password')
         
        signInUser(email,password)
        .then(result => {
            console.log(result.user)
            const user = {email}
            fetch('http://localhost:3000/createuser',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            Swal.fire(
                'success',
                'You have login successfully',
                'success'
              )
            navigate('/')
            navigate(location?.state ? location.state : '/')
        })
        .then(error => {
            console.log(error)
        })

         

    }

    return (
        <div className="hero min-h-screen bg-base-200">
           
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:my-10">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative md:flex justify-center">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"}
                            placeholder="password" 
                            name="password" 
                            className="input input-bordered"
                            required/>
                            <span className="absolute top-14 right-2" onClick={()=>setShowpassword(!showPassword)}>
                                {showPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash> }</span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                       
                       <p>You have no account so please <Link to= '/register'><a className="text-blue-700 mt-10">Register</a></Link></p>
                    
                    </form>
                </div>
            
        </div>
    );
};

export default Login;