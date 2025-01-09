// Navbar used when ligged in using Auth0

import { useAuth0 } from "@auth0/auth0-react"
import {Menu, X} from "lucide-react";
import { useState } from "react";
import image from "../assets/image.png";
import {NavLink} from "react-router-dom";

const LoggedInNavBar = () => {

    const {user, logout} = useAuth0();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }
    
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <NavLink to = "/"><img src={image}  alt="logo" className="w-16"></img></NavLink>
                </div>
                <ul className="hidden lg:flex ml-32 space-x-12">
                    <NavLink to = "/" className={(e)=>{return e.isActive ? "text-orange-400" : ""}}><li className="cursor-pointer hover:text-orange-400">Home</li></NavLink>
                    <NavLink to = "/FeaturesSection" className={(e)=>{return e.isActive ? "text-orange-400" : ""}}><li className="cursor-pointer hover:text-orange-400">Features</li></NavLink>
                    <NavLink to = "/About" className={(e)=>{return e.isActive ? "text-orange-400" : ""}}><li className="cursor-pointer hover:text-orange-400">About</li></NavLink>
                    <NavLink to = "/Contact" className={(e)=>{return e.isActive ? "text-orange-400" : ""}}><li className="cursor-pointer hover:text-orange-400">Contact</li></NavLink>
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                <h1>Welcome, {user.name}</h1><button onClick={()=> logout()} className="px-3 py-2 border rounded-md hover:translate-y-0.5 duration-200">Logout</button>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <h1>Welcome, {user.name}</h1>
                    <ul>
                    <NavLink to = "/" className={(e)=>{return e.isActive ? "text-orange-400" : ""}}><li className="cursor-pointer py-4 hover:text-orange-400">Home</li></NavLink>
                    <NavLink to = "/FeaturesSection" className={(e)=>{return e.isActive ? "text-orange-400" : ""}}><li className="cursor-pointer py-4 hover:text-orange-400">Features</li></NavLink>
                    <NavLink to = "/About" className={(e)=>{return e.isActive ? "text-orange-400" : ""}}><li className="cursor-pointer py-4 hover:text-orange-400">About</li></NavLink>
                    <NavLink to = "/Contact" className={(e)=>{return e.isActive ? "text-orange-400" : ""}}><li className="cursor-pointer py-4 hover:text-orange-400">Contact</li></NavLink>
                </ul>
                <div className="flex space-x-6">
                    <button onClick={()=> logout()} className="px-3 py-2 border rounded-md hover:translate-y-0.5 duration-200">Logout</button>
                </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default LoggedInNavBar