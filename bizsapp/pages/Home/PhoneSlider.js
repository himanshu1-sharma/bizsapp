import styles from '../../styles/Home.module.css';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";



// import required modules
import { Autoplay, EffectCoverflow } from "swiper";

export default function PhoneSlider() {
    return (
        <>
            <section className='container-fluid p-0'>
                <div className={styles.phoneslider_bg}>
                    <div className='container'>
                        <div className={`${styles.phoneslider_box} phoneSlider`}>
                            <div className={styles.mockup}>
                                <img src="/img/home/mockup.png" alt='phone_screen' className='img-fluid' />
                            </div>
                            <Swiper
                                effect={"coverflow"}
                                grabCursor={true}
                                centeredSlides={true}
                                spaceBetween={0}
                                slidesPerView={"auto"}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 60,
                                    modifier: 0,
                                    slideShadows: true,
                                }}
                                pagination={true}
                                modules={[Autoplay, EffectCoverflow]}
                                className="mySwiper"
                                loop={true}
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
