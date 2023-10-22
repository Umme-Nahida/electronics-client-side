import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {

    const { createUser, gooogleSignIn } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const email = form.get('email');
        const photoUrl = form.get('photo-url');
        const password = form.get('password');
        console.log(name, email, photoUrl, password)
        if (password.length < 6) {
            toast("Password should be at least 6 charecters ");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast('your password have at least one uper case charecters');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast('your password have at least one lower case charecters')
            return
        }

        else {
            createUser(email, password)
              .then((result) => {
                updateProfile(result.user, {
                  displayName: name,
                  photoURL: photoUrl,
                }).then(() => {
                 Swal.fire({
                   icon: "Success!",
                   title: "Success",
                   text: "Your register Success!",
                   footer: '<a href="">Why do I have this issue?</a>',
                 });
                });
                // navigate ater register
                navigate(location?.state ? location.state : "/");
              })
              .catch((error) => {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: " register faild Something went wrong!",
                })(error);
              });
          }

    //     createUser(email,password)
    //     .then(result=>{
    //        updateProfile(result.user,{
    //           displayName: name,
    //           photoURL: photoUrl,
    //        })
    //                     // navigate(location?.state ? location.state : "/");
    //     })
    //    .catch(error => {
    //      console.log(error)
    //      toast.error('This is an error!', error.message, error.code);
    //      })
     }

    const handleGoogle = () => {
        gooogleSignIn()
    }

    return (
        <div className="hero min-h-screen bg-base-200 py-10">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="Photo url" placeholder="Enter your photo url" name="photo-url" className="input input-bordered" required />
                    </div>

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
                            required />
                        <span className="absolute top-14 right-4" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>}</span>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        <button className="btn border my-5" onClick={handleGoogle} >Sign in with Google</button>
                    </div>
                    {/* <button onClick={handleGoogle} className="btn btn-ghost">SignIn with Google</button> */}
                    <p>You have already account so please <Link to='/login'><button className="text-blue-700">Login</button></Link></p>
                    <Toaster></Toaster>
                </form>
            </div>

        </div>
    );
};

export default Register;