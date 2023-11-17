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
        <div className="relative bottom-28 md:container md:mx-auto">
            <Slider {...settings}>
                <div className="hover:animate-bounce w-6 h-10">
                    <img className="relative top-20 mx-auto w-5/12 object-cover " src="/Balls/1.png" alt=""/>
                    <div className="text-center">
                        <text className="text-3xl">Pokémon is based around building a small team of monsters ,<br />to battle other monsters in a quest to become the best.</text>
                    </div>
                </div>
                <div className="hover:animate-bounce w-6 h-10 ">
                    <img className="relative top-20 mx-auto w-5/12 object-cover" src="/Balls/2.png" alt=""/>
                    <div className="text-center">
                        <text className="text-3xl">Pokémon are divided into types, such as water and fire,<br /> each with different strengths and weaknesses.  </text>
                    </div>
                </div>
                <div className="hover:animate-bounce w-6 h-10">
                    <img className="relative top-20 mx-auto w-5/12 object-cover" src="/Balls/3.png" alt=""/>
                    <div className="text-center">
                        <text className="text-3xl">Each Pokémon belongs to a specific species and has its own set of abilities, characteristics, and stats.</text>
                    </div>
                </div>
                <div className="flex items-center justify-center hover:animate-bounce w-6 h-10">
                    <img className="relative top-20 mx-auto w-5/12 object-cover" src="/Balls/4.png" alt=""/>
                    <div className="text-center">
                        <text className="text-3xl">Trainers use devices called Poké Balls to capture and store Pokémon. <br />When a wild Pokémon is weakened in battle, a Poké Ball can be thrown to attempt to catch it.</text>
                    </div>
                </div>
                <div className="flex items-center justify-center hover:animate-bounce w-6 h-10">
                    <img className="relative top-20 mx-auto w-5/12 object-cover" src="/Balls/5.png" alt=""/>
                </div>
                <div className="flex items-center justify-center hover:animate-bounce w-6 h-10">
                    <img className="relative top-20 mx-auto w-5/12 object-cover" src="/Balls/6.png" alt=""/>
                </div>
                <div className="flex items-center justify-center hover:animate-bounce w-6 h-10">
                    <img className="relative top-20 mx-auto w-5/12 object-cover" src="/Balls/7.png" alt=""/>
                </div>
                <div className="flex items-center justify-center">
                    <img className="relative top-20 mx-auto w-5/12 object-cover" src="/Balls/8.png" alt=""/>
                </div>
            </Slider>
        </div>
    );
};
