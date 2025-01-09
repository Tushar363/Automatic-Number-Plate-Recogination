//Main Navbar and Firebase Navbar

import {Menu, X} from "lucide-react";
import { useState } from "react";
import image from "../assets/image.png";
import {NavLink} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { doSignOut } from "../auth";
// import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {

    // const {loginWithRedirect} = useAuth0();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }
    const { userLoggedIn} = useAuth();
    const {currentUser} = useAuth();

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <NavLink to = "/"><img src={image}  alt="logo" className="w-16"></img></NavLink>
                </div>
                <ul className="hidden lg:flex space-x-12">
                    <NavLink to = "/" className={(e)=>{return e.isActive ? "text-orange-400" : ""}}><li className="cursor-pointer hover:text-orange-400">Home</li></NavLink>
                    <NavLink to = "/FeaturesSection" className={(e)=>{return e.isActive ? "text-orange-400" : ""}}><li className="cursor-pointer hover:text-orange-400">Features</li></NavLink>
                    <NavLink to = "/About" className={(e)=>{return e.isActive ? "text-orange-400" : ""}}><li className="cursor-pointer hover:text-orange-400">About</li></NavLink>
                    <NavLink to = "/Contact" className={(e)=>{return e.isActive ? "text-orange-400" : ""}}><li className="cursor-pointer hover:text-orange-400">Contact</li></NavLink>
                    { userLoggedIn && <h1>Welcome, {currentUser.email}</h1>}
                    { userLoggedIn ? <button onClick={doSignOut} className="px-3 py-2 border rounded-md hover:translate-y-0.5 duration-200">Logout </button> : <></>}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    {/* <button onClick={async () => await loginWithRedirect()} className="px-3 py-2 border rounded-md hover:translate-y-0.5 duration-200">Sign In / Register</button> */}
                    {/* <NavLink to ="/Register" className="px-3 py-2 border rounded-md hover:translate-y-0.5 duration-200">Sign In / Register</NavLink> */}
                    {/* <a href= "#" className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md">Register</a> */}
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    { userLoggedIn && <h1>Welcome, {currentUser.email}</h1>}
                    <ul>
                    <NavLink to = "/" className={(e)=>{return e.isActive ? "text-orange-400" : ""}}><li className="cursor-pointer py-4 hover:text-orange-400">Home</li></NavLink>
                    <NavLink to = "/FeaturesSection" className={(e)=>{return e.isActive ? "text-orange-400" : ""}}><li className="cursor-pointer py-4 hover:text-orange-400">Features</li></NavLink>
                    <NavLink to = "/About" className={(e)=>{return e.isActive ? "text-orange-400" : ""}}><li className="cursor-pointer py-4 hover:text-orange-400">About</li></NavLink>
                    <NavLink to = "/Contact" className={(e)=>{return e.isActive ? "text-orange-400" : ""}}><li className="cursor-pointer py-4 hover:text-orange-400">Contact</li></NavLink>
                </ul>
                { userLoggedIn ? <button onClick={doSignOut} className="px-3 py-2 border rounded-md hover:translate-y-0.5 duration-200">Logout </button> : <></>}
                <div className="flex space-x-6">
                    {/* <button onClick={async () => await loginWithRedirect()} className="px-3 py-2 border rounded-md hover:translate-y-0.5 duration-200">Sign In / Register</button> */}
                    {/* <NavLink to ="/Register" className="py-2 px-3 border rounded-md">Sign In / Register</NavLink> */}
                    {/* <NavLink to ="/Register" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Sign In / Register</NavLink> */}
                </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default NavBar