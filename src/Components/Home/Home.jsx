import React, { useEffect } from 'react'
import './home.css'
import video from '../../video/video.mp4'
import { HiFilter } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { HiOutlineSquaresPlus } from "react-icons/hi2";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  // scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <section className='home'>
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4" ></video>
        <div className="homeContent">

        <div className="textDiv">

            <span data-aos="fade-up" className="smallText">
              Our Package
            </span>

            <h1 data-aos="fade-up" className='homeTitle'>Search Your Holidays</h1>

          </div>

        <div data-aos="fade-up" className="cardDiv grid">
           <div className="designationInput">
            <label htmlFor="city">Search your Designation :</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here' />
              <GrLocation className='icon'/>
            </div>
            
           </div>

           <div className="dateInput">
            <label htmlFor="date">Select your date :</label>
            <div className="input flex">
              <input type="date"  />
            </div>
            
           </div>

           <div className="priceInput">
           <div className="label_total flex">
            <label htmlFor="price">Max price :</label>
            <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
           </div>

           <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
            
           </div>
           
        </div>

        <div data-aos="fade-up" className="homeFooterIcon flex">
          <div className="right">
          <FiFacebook  className="icon"/>
          <FaInstagram className="icon"/>
          <FaTripadvisor className="icon" />

          </div>
          <div className="left">
          <FaListUl className="icon"/>
          <HiOutlineSquaresPlus className="icon" />


          </div>
        </div>
          </div>
        
        
    </section>
  )
}

export default Home