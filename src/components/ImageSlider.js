import React, { useState } from 'react'
import {ImageData} from './ImageData'

function ImageSlider() {

    const [current, setCurrent] = useState(0);
    const length = ImageData.length;

    function nextSlide() {
        setCurrent( current === length - 1 ? 0 : current + 1 );
    }

    function prevSlide() {
        setCurrent( current === 0 ? length - 1 : current - 1 );
    }

    return (
        <section className='slider-container'>
            <i className="fas fa-chevron-circle-left" onClick={prevSlide}></i>
            <i className="fas fa-chevron-circle-right" onClick={nextSlide}></i>
            {ImageData.map((slide,index) => {
                return (
                    <div className={index === current ? "slide active" : "slide"}>
                    { index === current && <img className="image" src={slide.image} alt="images" />}
                    </div>
                )
            })}
        </section>
        
    )
}

export default ImageSlider
