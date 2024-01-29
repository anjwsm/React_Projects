import React, { useState , useEffect } from 'react';
import './Carousel.css';





const Carousel = ({data , autoplayInterval = 2000 }) =>{
  const[ slide , setSlide] = useState(0);
  const nextSlide =() =>{
    setSlide ( slide === data.length - 1 ? 0 : slide + 1);
  }
  const prevSlide =() =>{
    setSlide ( slide === 0 ? data.length - 1 :slide - 1);
  }

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
        nextSlide()
    }, autoplayInterval);


    // console.log(slide,'slide');

    //clean up : return a funtion 
    
    return () => clearInterval(autoplayTimer);


}, [slide, data.length, autoplayInterval]);

  return (
    <div className='carousel'>
       <div className='arrow arrow-left' onClick={prevSlide}><img src='../src/assets/arrowback.svg'/></div>
        {data.map((item , idx)  => {
            return <img 
            src={item.src} alt={item.alt} key={idx} 
            className={slide === idx ? "slide" : "slide-hidden"}
            />
        })
            
        }
        <div className='arrow arrow-right' onClick={nextSlide}><img src='../src/assets/arrowforward.svg'/></div>
        <span className='indicators'>
            {data.map((_ , idx)=>{
                return <button
                 key={idx} 
                 onClick ={() => setSlide(idx)} 
                 className={slide === idx ? "indicator" : "indicator-inactive"}>

                 </button>
            })}

        </span>
    </div>

  )
 
}

export default Carousel;