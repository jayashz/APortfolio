import React from 'react'
import './Intro.css'
import FloatingDiv from '../floadingDiv/FloatingDiv'
import Github from '../img/github.png';
import LinkedIn from '../img/linkedin.png';
import Insta from '../img/instagram.png';

import Vector1 from '../img/Vector1.png';
import Vector2 from '../img/Vector2.png';
import Model from '../img/boy.png';
import thumsup from '../img/thumbup.png';
import Crown from '../img/crown.png';
import glassemoji from '../img/glassesimoji.png';

const Intro = () => {
  return (
    <div className='intro'> 
        <div className='intro-left'>
            <div className='intro-name'>
                <span>Hy! Its me</span>
                <span >Jayash Shrestha</span>
                <span>Frontend Developer with enough level of experience in web designing and development, producting the Quality work</span>
            </div>
            <button className='intro-button button'>Hire me</button>
            <div className='intro-icons'>
              <img src={Github} alt="Github logo" />
              <img src={LinkedIn} alt="linked in logo" />
              <img src={Insta} alt="Instagram logo" />
            </div>
        </div>
        <div className='intro-right'>
          <img src={Vector1} alt="just a vector" />
          <img src={Vector2} alt="just another vector" />
          <img src={Model} alt="Our website's model" />
          <img src={glassemoji} alt="An emoji" />
          <div className='position1'>
              <FloatingDiv img={Crown} txt1='Web' txt2='Developer' />
          </div>
          <div className='position2'>
            <FloatingDiv img={thumsup} txt1='Best Designs' txt2='Award' />
          </div>
          <div className='blur'></div>
          <div className='blur' style={{backgroundColor: '#C1f5FF',top:'13rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro