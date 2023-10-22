import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
   const {user,logOut} = useContext(AuthContext);
   console.log(user)
 
    const link = <>
        <li className="mb-5" ><Link to="/">Home</Link></li>
        <li className="mb-5"><Link to="/addproduct">Add-Product</Link></li>
        <li className="mb-5"><Link to={`mycart/${user?.email}`}>My-Cart</Link></li>
        <li className="mb-5"><Link to="/register">Register</Link></li>
        {
            user && <>
                   <li className="mb-5"><Link to="/addproduct">Add-Product</Link></li>
                   <li className="mb-5"><Link to="/updateproduct">update-Product</Link></li>
            </>
        }

    </>

    const handleSignOut = e =>{
        e.preventDefault();
        logOut()
        .then(result =>{
            console.log(result.user)
        })
        .then(error => {
            console.log(error)
        })
    }

    const handleBtn = ()=>{
        console.log('this is handle tbn ')
    }

    return (
        <div>
            <div className="max-w-[1380px] mx-auto px-10 py-4 shadow-xl">
                <div className=" flex items-center justify-between ">
                    <div className="lg:block navbar-start">
                        <div className="flex justify-start items-center">
                            <img className="w-16" src="https://i.ibb.co/FnCMMMt/png-clipart-www-logo-computer-network-internet-material-network-technology-blue-electronics-removebg.png" alt="" />
                            <h1 className="hidden md:flex text-2xl text-black italic font-semibold">Electronics It</h1>
                        </div>

                    </div>

                    {/* dropdown menu list */}
                    <div>
                        <details className=" text text-center lg:hidden">
                            <summary onClick={handleBtn} className="m-1 btn"><HiOutlineMenu></HiOutlineMenu></summary>
                            <ul className="z-[1] shadow absolute min-h-[60vh] left-0 top-[34%] w-full bg-base-100 rounded pt-7 border-t-2">
                                {link}
                            </ul>
                        </details>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex flex-col md:flex-row lg:flex-row items-center text-lg text-[#3540d1] lg:gap-8 md:gap-5 gap-3 ml-40 md:ml-64 lg:ml-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending border" : isActive ? "text-[#F4A521] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/mycart/${user?.email}`}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending border" : isActive ? "text-[#F4A521] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                                    }
                                >
                                    My-cart
                                </NavLink>
                            </li>
                            {  // if user is logges so show the this route
                            user && <>
                                 <li>
                                <NavLink
                                    to="/addproduct"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending border" : isActive ? "text-[#F4A521] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                                    }
                                >
                                    Add-Product
                                </NavLink>
                            </li>
                                {/* <li>
                                    <NavLink
                                        to="/update"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#1BB7E8] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                                        }
                                    >
                                        Update Product
                                    </NavLink>
                                </li> */}

                            </>
                        }
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#F4A521] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/register"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#F4A521] py-2 px-6 rounded-full bg-gray-200 text-lg font-semibold" : ""
                                    }
                                >
                                    Register
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex navbar-end">
                        <div className="flex items-center justify-center">
                            {
                                user ? <button onClick={handleSignOut} className="btn btn-warning">Sign Out</button> :
                                <Link to='/login'>
                                    <button className="btn btn-warning">Login</button> 
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;