import styles from '../../styles/Home.module.css';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';





// import required modules
import { Autoplay } from "swiper";

export default function FeatureSlider() {
    return (
        <>
            <section className='container-fluid p-0'>
                <div className={styles.phoneslider_bg}>
                    <div className="container">
                        <div className={`${styles.feature_slider} home_mobile_slider`}>
                            <div className={styles.mockup}>
                                <Image src="/img/home/mockup.png" alt='phone_screen' width={264} height={527} />
                            </div>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 1,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 5,
                                        spaceBetween: 20,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                    1300: {
                                        slidesPerView: 5,
                                        spaceBetween: 5,
                                    },
                                    1400: {
                                        slidesPerView: 5,
                                        spaceBetween: 20,
                                    },
                                }}

                                modules={[Autoplay]}
                                className="mySwiper"

                            >
                                <SwiperSlide>
                                    <Image src="/img/home/mockup-screen1.png" alt="Header_Slider" width={264} height={527} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src="/img/home/mockup-screen2.png" alt="Header_Slider" width={264} height={527} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src="/img/home/mockup-screen3.png" alt="Header_Slider" width={264} height={527} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src="/img/home/mockup-screen4.png" alt="Header_Slider" width={264} height={527} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src="/img/home/mockup-screen2.png" alt="Header_Slider" width={264} height={527} />
                                </SwiperSlide>
                            </Swiper>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
};
