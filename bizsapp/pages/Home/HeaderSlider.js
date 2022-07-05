import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

// Import Swiper styles

import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay } from "swiper";



export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[EffectFade, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/img/home/header-slider-mockup-screen1.png" alt="mockup-screen1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/home/header-slider-mockup-screen2.png" alt="mockup-screen2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/home/header-slider-mockup-screen3.png" alt="mockup-screen3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/home/header-slider-mockup-screen4.png" alt="mockup-screen4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/home/header-slider-mockup-screen5.png" alt="mockup-screen5" />
                </SwiperSlide>
            </Swiper>

            
        </>
    );
}