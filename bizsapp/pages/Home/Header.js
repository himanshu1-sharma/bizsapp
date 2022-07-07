import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import HeaderSlider from './HeaderSlider';
import HeaderMobileSlider from './HeaderMobileSlider';

export default function Header() {
    return (
        <>
            <section className='container-fluid p-0'>
                <div className={styles.header_bg}>
                    <div className={styles.header_overlay}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'>
                                    <div className='header_text_center'>
                                        <div className='header_text'>
                                            <h1>Simple.Secure. Reliable messaging.</h1>
                                            <p>With BizsApp, you'll get fast, simple, secure messaging for free, available on phones all over the world.</p>
                                            <span>Data charges may apply. Contact your provider for details.</span>
                                            <div className={styles.mobile_hide}>
                                                <ul>
                                                    <li>
                                                        <img src="/img/home/Ios-Icon.png" alt='Ios-Icon' className='img-fluid' />
                                                    </li>
                                                    <li>
                                                        <img src="/img/home/Google-play.png" alt='Ios-Icon' className='img-fluid' />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12'>
                                    <div className="header_slider">
                                        <div className="header_slider_box">
                                            <div className={styles.header_slider_mockup}>
                                                <Image src="/img/home/header-slider-mockup.png" alt="header-slider-mockup" width={610} height={610} />
                                            </div>
                                            <div className="header_mockup_slider">
                                                <HeaderSlider />
                                            </div>
                                            <div className={styles.header_silder_mockup_support}>
                                                <Image src="/img/home/header-slider-support-mockup.png" alt="header-slider-support-mockup" width={348} height={582} />
                                            </div>
                                        </div>

                                    </div>
                                    <div className={styles.header_mobile_slider}>
                                        <div className={styles.header_mobile_slider_mockup}>
                                            <img src="/img/home/mockup.png" alt="header-slider-mockup" className='img-fluid' />
                                        </div>
                                        <div className={styles.header_mobile_slider_box}>
                                            <HeaderMobileSlider />
                                        </div>
                                    </div>
                                    <div className={styles.desktop_hide}>
                                        <div className='header_text'>
                                            <ul>
                                                <li>
                                                    <img src="/img/home/Ios-Icon.png" alt='Ios-Icon' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <img src="/img/home/Google-play.png" alt='Ios-Icon' className='img-fluid' />
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
