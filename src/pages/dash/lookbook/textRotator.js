import React, { useEffect, useState } from 'react'
import "./lookbook.css"
import Spline from '@splinetool/react-spline';

const occasional = [
    'https://prod.spline.design/LQmHRJGeE02j-TCO/scene.splinecode',
    'https://prod.spline.design/YvhD0Kc4IZ2YDWZp/scene.splinecode'
  ];
const casuals = [
    'https://prod.spline.design/TU164-dhu1ULg60t/scene.splinecode',
    'https://prod.spline.design/VIdA6wGhkkvDyX6C/scene.splinecode'
  ];
const official = [
    'https://prod.spline.design/Pnkt4w2AEGoke3gc/scene.splinecode',
    'https://prod.spline.design/d6nvNRq1jjq0BUuU/scene.splinecode'
  ];

const TextRotator = (props) => {
  const [array,setArray] = useState(occasional);

        const [currentSlide, setCurrentSlide] = useState(0);
        const [direction, setDirection] = useState('left');
    useEffect(() => {
        const timer = setTimeout(() => {
          setDirection(direction ==='left');
          setCurrentSlide((currentSlide + 1) % array.length);
        }, 7000);
        return () => clearTimeout(timer);
      }, [currentSlide]);
  return (
    
          <div
            className="text-slide lb-avatar"
            style={{ transform: `translateX(${direction === 'left' ? '' : '-'}0%)` }}
            onAnimationEnd={() => setDirection('left')}
          >
            <Spline scene={array[currentSlide]} />

          </div>
        
   
  )
}

export default TextRotator
