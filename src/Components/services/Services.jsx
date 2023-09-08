import React from 'react';
import './Services.css';
import HeartEmoji from '../img/heartemoji.png';
import HumbleEmoji from '../img/humble.png';
import Glasses from '../img/glasses.png';
import Card from '../Cards/Card';
import Resume from './Resume.pdf'

const Services = () => {
  return (
    <div className='services'>
        <div className='services-left'>
            <span>My awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus  <br /> voluptate exercitationem facere architecto laborum fugit.</span>
            <a href={Resume} download>
                 <button className='button services-button'>Download CV</button>
            </a>
        </div>
        <div className='services-right'>
            <div style={{left:'13rem'}}>
            <Card img={HeartEmoji} heading={'Design'} detail={'Figma, Sketch and Photoshop'}/>
            </div>
            <div style={{top:'14rem', left:'-1rem'}}>
                <Card img={Glasses} heading={'Developer'} detail={'HTML, CSS, JS and React'}></Card>
            </div>
            <div style={{top:'19rem',left:'15rem'}}>
                <Card img={HumbleEmoji} heading={'UI/UX'} detail={"Have a decent skill of UI/UX"}/>
            </div>
        <div className='blur service-blur-2' style={{background:"#C1f5FF"}}></div>
        <div className='blur service-blur-1' style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services