import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex items-center h-20 bg-linear-to-r/srgb from-indigo-500 to-teal-400">
            <ol className="flex w-500 justify-evenly items-center">
                <li className="font-bold italic rounded-md  bg-orange-500 text-black p-2 ">
                    <Link to="/home">Home</Link>
                </li>
                <li className="font-bold italic rounded-md  bg-orange-500 text-black p-2">
                    <Link to="/view-products">Products</Link>
                </li>
                <li className="font-bold italic rounded-md  bg-orange-500 text-black p-2">
                    <Link to="/register">Register</Link>
                </li>
                <li className="font-bold italic rounded-md  bg-orange-500 text-black p-2">
                    <Link to="/about">About</Link>
                </li>
                <li className="font-bold italic rounded-md  bg-orange-500 text-black p-2">
                    <Link to="/contact">Contact</Link>
                </li>


                <li >
                    <button className="btn btn-primary">
                    <Link to="/login" className="text-white">
                    Login
                    </Link>
                    </button>
                </li>
            </ol> 
        </nav> 
    )
}

export default NavBar;