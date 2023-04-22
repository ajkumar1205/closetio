import React, { useEffect, useState } from 'react'
import "./lookbook.css"
import Spline from '@splinetool/react-spline';

const textArray = [
    'https://prod.spline.design/a7RVklDz3xdVRkma/scene.splinecode'
  ];

const TextRotator = () => {
        const [currentSlide, setCurrentSlide] = useState(0);
        const [direction, setDirection] = useState('left');
    useEffect(() => {
        const timer = setTimeout(() => {
          setDirection(direction==='left');
          setCurrentSlide((currentSlide + 1) % textArray.length);
        }, 10000000);
        return () => clearTimeout(timer);
      }, [currentSlide]);
  return (
    <div>
        <div className="text-rotator">
          <div
            className="text-slide lb-avatar"
            style={{ transform: `translateX(${direction === 'left' ? '' : '-'}0%)` }}
            onAnimationEnd={() => setDirection('left')}
          >
            {/* {textArray[currentSlide]} */}
            <Spline scene={textArray[0]} />

          </div>
         </div>
    </div>
  )
}

export default TextRotator
