import React, { useState } from 'react'
import './navbar.css'
import { MdTravelExplore } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { MdOutlineStorage } from "react-icons/md";



const Navbar = () => {

    const [active,setActive] = useState('navBar')
// function to toggle navbar
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }
    // function to close navbar
    const closeNav = () =>{
        setActive('navBar')
    }


  return (
    <section className='navbarSection'>
        <header className="header flex">

            <div className="headerlogo">
                <a href="#" className='logo flex'>
                    <h1> <MdTravelExplore /> Travel.in</h1>
                </a>
            </div>

           <div  className={active}>
                <ul  className="navList flex">
                    <li  className="navItem">
                        <a href="#" className="navlink">Home</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navlink">Packages</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navlink">Shop</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navlink">About</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navlink">Pages</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navlink">News</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navlink">Contact</a>
                    </li>
                    <li className="navItem">
                        <button className='btn'>
                            <a href="#" >BOOK NOW</a>
                        </button>
                    </li>
                </ul>

                <div onClick={closeNav} className="closeNavbar" >
                <IoCloseCircleSharp  className="icon"  />
                </div>
                </div>
                <div className="toggleNavbar" onClick={showNav}>
                <MdOutlineStorage className="icon" />
                </div>
           
        </header>

    </section>
  )
}

export default Navbar