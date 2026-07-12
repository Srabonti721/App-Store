import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import iPhone from "../assets/iphone 17 pro.jpeg"
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {user,LogOutUser }= use(AuthContext);

  const handleLogout = () =>{
        LogOutUser()
            .then(() => {
                toast.error('🦄 User LogOut', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(error => {
                console.log(error)
            })
  }
  
  const links = <>
    <NavLink className='mr-10' to='/'>Home</NavLink>
    <NavLink className='mr-10' to={'/apps'}>Apps</NavLink>
    <NavLink className='mr-10' to='/profile'>MY Profile</NavLink>
  </>
  return (
    <div className="navbar shadow-sm bg-linear-to-r from-indigo-200 from-10% via-sky-100 via-30% to-emerald-100 to-90%">
      <div className="navbar-start">
        
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         
            {links}
          </ul>
        </div>
        <img className='w-[50px] h-[50px] border border-green-500 rounded-3xl' src={iPhone} alt="" />
        <a className=" text-xl text-white font-bold ml-2">App <span className='text-[#B9FF66]'>S</span>tore</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div className='avatar'>
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
        <p>  {user && user.email}</p>
        
        {
          user?
          <button onClick={handleLogout} className="btn btn-secondary ml-2 px-8">Logout</button>:
          <Link to='/authLayout/login' className="btn btn-secondary ml-2 px-8">Login</Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;