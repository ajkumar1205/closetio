import React, { useEffect, useState } from 'react'
import "./lookbook.css"
import Spline from '@splinetool/react-spline';

const textArray = [
    'https://prod.spline.design/a7RVklDz3xdVRkma/scene.splinecode',
    'https://my.spline.design/untitled-8da1d5d1fdd0a33085bad6ffc9a41652/'
  ];

const TextRotator = () => {
        const [currentSlide, setCurrentSlide] = useState(0);
        const [direction, setDirection] = useState('left');
    useEffect(() => {
        const timer = setTimeout(() => {
          setDirection(direction==='left');
          setCurrentSlide((currentSlide + 1) % textArray.length);
        }, 1000);
        return () => clearTimeout(timer);
      }, [currentSlide]);
  return (
    <div>
        <div className="text-rotator">
          <div
            className="text-slide"
            style={{ transform: `translateX(${direction === 'left' ? '' : '-'}100%)` }}
            onAnimationEnd={() => setDirection('left')}
          >
            {/* {textArray[currentSlide]} */}
            <Spline scene={textArray[currentSlide]} />

          </div>
         </div>
         <div className='lb-avatar'>
        </div>
    </div>
  )
}

export default TextRotator
