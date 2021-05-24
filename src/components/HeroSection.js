import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import VIDEO1 from '../videos/video-1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={VIDEO1} autoPlay loop muted />
      <h1>MADE MY TRIP</h1>
      <p>วางแผนการเที่ยวของคุณกับเรา</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          เริ่มวางแผน
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ตัวอย่าง <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;