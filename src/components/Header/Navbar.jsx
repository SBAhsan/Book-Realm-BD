import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {

    const links = <>
         <Link to='/'><li className='m-5'>Home</li></Link>
         <li className='m-5'>About</li>
    </>

    return (
        <div>
            <div className="navbar bg-cyan-600 shadow-sm">
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
    <a className="btn btn-ghost text-xl">Book Realm BD</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn px-5 py-2 bg-amber-300 rounded-xl">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;