import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io'
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Images/logo.png'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="bg-[#454C49] text-white py-4 md:py-1">
            <div onClick={() => setOpen(!open)} className="h-6 w-6 text-white md:hidden cursor-pointer" >

                {open ? <ImCross className="h-4 w-4 ml-2"></ImCross> : <IoMdMenu className="h-6 w-6 ml-2"></IoMdMenu>}
            </div>

            <ul className={`bg-[#454C49] w-full text-lg py-2 md:flex md:justify-between absolute md:static duration-500 ease-in-out container mx-auto ${open ? "top-10" : "top-[-200px]"}`}>
                <div className="logo hidden md:block">
                    <img src={logo} alt="" />
                </div>
                <div className="items md:flex">
                    <li className='p-2 md:mx-2'><Link to="/blog">Blog</Link></li>
                    <li className='p-2 md:mx-2'><Link to="/services">Services</Link></li>
                    <li className='p-2 md:mx-2'><Link to="/about">About</Link></li>
                    <li className='p-2 md:mx-2'><Link to="/contact">Sign Out</Link></li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;