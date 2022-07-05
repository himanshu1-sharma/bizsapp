import styles from '../../styles/Download.module.css';
import Link from 'next/link';
import HeaderSlider from './HeaderSlider';

export default function Header() {
    return (
        <>
            <section className='container-fluid p-0'>
                <div className={styles.header_bg}>
                    <div className={styles.header_overlay}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                    <div className='header_text_center'>
                                        <div className='header_text'>
                                            <h1>Visit <Link href="/">Bizsapp.com</Link> on your mobile phone to install</h1>
                                            <p>By installing BizsApp, you agree to our <Link href="#">Terms</Link> & <Link href="#">Privacy Policy</Link>. </p>
                                            
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
                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.header_phone}>
                                        <ul className={styles.header_slider_list}>
                                            <li className={styles.li}>
                                                <img src="/img/download/download_header_Mockup.png" alt='download_header_Mockup' className='img_fluid' />
                                            </li>
                                            <li className={styles.header_mockup_slider}>
                                                <div className='download_header_slider_box'>
                                                    <div className={styles.mockup}>
                                                        <img src="/img/download/mockup.png" alt='mockup' className='img_fluid' />
                                                    </div>
                                                    <div className='download_header_slider'>
                                                        <HeaderSlider />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
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
