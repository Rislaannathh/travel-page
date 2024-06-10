import React, { useEffect } from 'react'
import './main.css'
import img from '../../photo/photo1.jpeg'
import img2 from '../../photo/photo2.jpeg'
import img3 from '../../photo/photo3.jpeg'
import img4 from '../../photo/photo4.jpeg'
import img5 from '../../photo/photo5.jpeg'
import img6 from '../../photo/photo6.jpeg'
import img7 from '../../photo/photo7.jpeg'
import img8 from '../../photo/photo8.jpeg'
import img9 from '../../photo/photo9.jpeg'

import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaClipboardList } from "react-icons/fa";


import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc:img,
    destTitle: 'Bora Bora',
    location:'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurius stays and adventurous activities.'

  }, 
  {
    id:2,
    imgSrc:img2,
    destTitle: 'Machu Picchu',
    location:'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu , the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular'

  }, 
  {
    id:3,
    imgSrc:img3,
    destTitle: 'Great Barrier Reef',
    location:'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty . Always intresting to be in this place'

  }, 
  {
    id:4,
    imgSrc:img4,
    destTitle: 'Cappadocia',
    location:'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description:'According to the World Tourism Ranking, 45 Millian people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventures activities'

  }, 
  {
    id:5,
    imgSrc:img5,
    destTitle: 'Guanajuato',
    location:'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description:'A Coty in central Mexico, Guanajuato is known for its history of silver mining and colonical architecture, The houses in the city are very attractive one.Always welcome.'

  }, 
  {
    id:6,
    imgSrc:img6,
    destTitle: 'Cinque Terre',
    location:'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description:'The vibrant hues of the houses are its benchmark and explain the beauty of this place.Also if you are a foodie and love seafood,you will exploring and loved it.'

  }, 
  {
    id:7,
    imgSrc:img7,
    destTitle: 'Angkor Wat',
    location:'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description:'According to the World Tourism Ranking, 45 Millian people visit Cambodia each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventures activities'

  }, 
  {
    id:8,
    imgSrc:img8,
    destTitle: 'Leh Ladakh',
    location:'India',
    grade: 'CULTURAL RELAX',
    fees: '$780',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurius stays and adventurous activities.'

  }, 
  {
    id:9,
    imgSrc:img9,
    destTitle: 'Goa',
    location:'India',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description:'The State is flanked on the east by Sahyadri Mountains and on the West with Arabian Sea. The Northern tip of Goa borders Maharashtra State while Southern area is bordered by Karnataka State.'

  }
]

const Main = () => {

    // scroll animation
    useEffect(()=>{
      Aos.init({duration: 2000})
    },[])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3  data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>
      <div data-aos="fade-up" className="secContent grid">
        
        
          {
            Data.map(({id, imgSrc, destTitle,location, grade, fees, description })=>{
              return(
                <div key={id} data-aos="fade-up" className="singleDestination">
                 <div className='imgDiv'><img src={imgSrc} alt={destTitle} width={100} height={20} /></div>

                 <div className="cardInfo"><h4 className="destTitle">{destTitle}</h4>
                 <span className="continent flex">
                 <HiOutlineLocationMarker className="icon" />
                  <span className='name'>{location}</span>
                  </span>
                  
                  </div>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade} <small>+1</small> </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                 
                 <div className="desc">
                  <p>{description}</p>
                 </div>

                 <button className="btn flex ">
                  DETAILS <FaClipboardList className='icon'/>
                 </button>
                </div>
              )
            } )
          }
 
      



        
      </div>
    </section>
  )
}

export default Main