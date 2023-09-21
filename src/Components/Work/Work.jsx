import React from 'react'
import './Work.css';
import Upwork from '../img/Upwork.png';
import Fiber from '../img/fiverr.png';
import Amazon from '../img/amazon.png';
import Shopify from '../img/Shopify.png';
import Facebook from '../img/Facebook.png';


const Work = () => {
  return (
    <div className='works'>
        <div className='services-left works-left'>
            <span>Works for all these</span>
            <span>Brands & Clients</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus  <br /> voluptate exercitationem facere architecto laborum fugit.<br /> dolor sit amet consectetur adipisicing facere architecto
            <br/>voluptate exercitationem facere architecto laborum fugit.
            </span>

                 <button className='button services-button'>Hire Me!</button>

        </div>
        <div className="works-right">
            <div className='main-circle'>
              <div className="sec-circle">
                <img src={Upwork} alt="icon" />
              </div>
              <div className="sec-circle">
                <img src={Fiber} alt="icon" />
              </div>
              <div className="sec-circle">
                <img src={Shopify} alt="icon" />
              </div>
              <div className="sec-circle">
                <img src={Amazon} alt="icon" />
              </div>
              <div className="sec-circle">
                <img src={Facebook} alt="icon" />
              </div>
            </div>
            <div className="bg-circle blue-circle"></div>
            <div className="bg-circle yellow-circle"></div>

        </div>
    </div>
  )
}

export default Work