import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { FaUser, FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import avatar from "./../assets/avatar.png";

const navigation = [
    { name: "Dashboard", href:"/dashboard" },
    { name: "Orders", href:"/orders" },
    { name: "Cart", href:"/cart" },
    { name: "Checkout", href:"/checkout" },
];

const Nav = () => {
    const Currentuser = true;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className='w-full px-4 py-3 mx-auto bg-white sm:px-6 max-w-screen-2xl'>
            <nav className='flex items-center justify-between'>

                {/* Left Side */}
                <div className='flex items-center gap-4 md:gap-8'>

                    {/* Menu Icon */}
                    <Link to="/" className="text-gray-900 hover:text-gray-700">
                        <HiBars3BottomLeft className="w-6 h-6" />
                    </Link>

                    {/* Search Bar */}
                    <div className='flex items-center p-2 bg-white border border-gray-300 rounded-md w-[120px] sm:w-[180px] md:w-[250px] lg:w-[300px]'>
                        <FiSearch className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search"
                            className='w-full px-4 ml-2 bg-transparent rounded outline-none'
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className='relative flex items-center space-x-3 sm:space-x-4'>

                    {/* User Profile or Login */}
                    <div className='relative'>
                        {Currentuser ? (
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className='flex items-center cursor-pointer'
                            >
                                <img
                                    src={avatar}
                                    alt="User Avatar"
                                    className="rounded-full w-7 h-7 ring-2 ring-green-500"
                                />
                            </button>
                        ) : (
                            <Link to='/login'>
                                <FaUser className='w-6 h-6' />
                            </Link>
                        )}

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 w-40 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                                <ul className="py-2">
                                    {navigation.map((item) => (
                                        <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                            <Link to={item.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Wishlist (Hidden on small screens) */}
                    <button className='hidden sm:block'>
                        <FaHeart className='w-6 h-6' />
                    </button>

                    {/* Shopping Cart */}
                    <Link to='/cart' className='bg-[#FFCE1A] p-2 sm:px-6 py-2 rounded-sm flex items-center'>
                        <MdOutlineShoppingCart className='w-6 h-6' />
                        <span className='text-sm font-semibold sm:ml-1'>0</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
