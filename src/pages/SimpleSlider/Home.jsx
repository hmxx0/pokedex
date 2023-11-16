import Slider from "react-slick";
import React from 'react';
import "./slick.css"; 
import "./slick-theme.css";

export default function SimpleSlider () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="md:container md:mx-auto">
            <Slider {...settings}>
                <div className="flex items-center justify-center hover:animate-bounce w-6 h-10">
                    <img className="mx-auto w-1/3 object-cover " src="/Balls/1.png" alt=""/>
                </div>
                <div className="flex items-center justify-center hover:animate-bounce w-6 h-10">
                    <img className="mx-auto w-1/3 object-cover" src="/Balls/2.png" alt=""/>
                </div>
                <div className="flex items-center justify-center hover:animate-bounce w-6 h-10">
                    <img className="mx-auto w-1/3 object-cover" src="/Balls/3.png" alt=""/>
                </div>
                <div className="flex items-center justify-center hover:animate-bounce w-6 h-10">
                    <img className="mx-auto w-1/3 object-cover" src="/Balls/4.png" alt=""/>
                </div>
                <div className="flex items-center justify-center hover:animate-bounce w-6 h-10">
                    <img className="mx-auto w-1/3 object-cover" src="/Balls/5.png" alt=""/>
                </div>
                <div className="flex items-center justify-center hover:animate-bounce w-6 h-10">
                    <img className="mx-auto w-1/3 object-cover" src="/Balls/6.png" alt=""/>
                </div>
                <div className="flex items-center justify-center hover:animate-bounce w-6 h-10">
                    <img className="mx-auto w-1/3 object-cover" src="/Balls/7.png" alt=""/>
                </div>
                <div className="flex items-center justify-center">
                    <img className="mx-auto w-1/3 object-cover" src="/Balls/8.png" alt=""/>
                </div>
            </Slider>
        </div>
    );
};
