import Slider from "react-slick";
import React from 'react';
import "./slick.css"; 
import "./slick-theme.css";
import Search from "../../components/Search";



export default function SimpleSlider () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="relative bottom-200 md:container md:mx-auto">
            <Slider {...settings}>
                <div className="hover:animate-bounce w-6 h-10">
                    <img className="relative top-20 mx-auto w-5/12 object-cover " src="/Balls/1.png" alt="" />
                    <div className="text-center">
                        <p className="text-3xl text-emerald-600 font-bold">Pokémon is based around building a small team of monsters ,<br />to battle other monsters in a quest to become the best.</p>
                    </div>
                </div>
                <div className="hover:animate-bounce w-6 h-10 ">
                    <img className="relative top-20 mx-auto w-5/12 object-cover" src="/Balls/2.png" alt="" />
                    <div className="text-center">
                        <p className="text-3xl text-emerald-600 font-bold">Pokémon are divided into types, such as water and fire,<br /> each with different strengths and weaknesses.  </p>
                    </div>
                </div>
                <div className="hover:animate-bounce w-6 h-10">
                    <img className="relative top-20 mx-auto w-5/12 object-cover" src="/Balls/3.png" alt="" />
                    <div className="text-center">
                        <p className="text-3xl text-emerald-600 font-bold">Each Pokémon belongs to a specific species and has its own set of abilities, characteristics, and stats.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center hover:animate-bounce w-6 h-10">
                    <img className="relative top-20 mx-auto w-5/12 object-cover" src="/Balls/4.png" alt="" />
                    <div className="text-center">
                        <p className="text-3xl text-emerald-600 font-bold">Trainers use devices called Poké Balls to capture and store Pokémon. <br />When a wild Pokémon is weakened in battle, a Poké Ball can be thrown to attempt to catch it.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center hover:animate-bounce w-6 h-10">
                    <img className="relative top-20 mx-auto w-5/12 object-cover" src="/Balls/5.png" alt="" />
                    <div className="text-center">
                        <p className="text-3xl text-emerald-600 font-bold">Legendary Pokémon are rare, powerful Pokémon that are closely related to local lore surrounding the creation or destruction of a certain region. There is only one of each in the world.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center hover:animate-bounce w-6 h-10">
                    <img className="relative top-20 mx-auto w-5/12 object-cover" src="/Balls/6.png" alt="" />
                    <div className="text-center">
                        <p className="text-3xl text-emerald-600 font-bold">Another is that Lugia is actually an extremely dangerous Pokemon - one flap from its wings can cause a 40-day storm. In order to keep others safe, it spends most of its time gliding silently at the bottom of the ocean.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center hover:animate-bounce w-6 h-10">
                    <img className="relative top-20 mx-auto w-5/12 object-cover" src="/Balls/7.png" alt="" />
                    <div className="text-center">
                        <p className="text-3xl text-emerald-600 font-bold">Moltres is a powerful Pokemon who can usually avoid severe injury, but if it ever does find itself in need of healing, it has a spectacular method of doing so. It dives into a volcano and uses the lava to deal with its injuries.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img className="relative top-20 mx-auto w-5/12 object-cover" src="/Balls/8.png" alt="" />
                    <div className="text-center">
                        <p className="text-3x l text-emerald-600 font-bold">Xerneas is an immortal Pokemon that has lived for thousands of years. It sometimes sleeps in the form of a tree. But when it's awake, it can use its branch-like antlers to bestow immortality to others.</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};
