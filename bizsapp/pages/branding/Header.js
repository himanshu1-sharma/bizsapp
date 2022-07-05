import styles from '../../styles/Branding.module.css';
import Link from 'next/link';


export default function Header() {
    return (
        <>
            <section className='container-fluid p-0'>
                <div className={styles.header_bg}>
                    <div className={styles.header_content}>
                        <div className='row' style={{marginRight: "0"}}>
                            <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12'>
                                <div className='header_text_center'>
                                    <div className='header_text'>
                                        <h1>Brand summary</h1>
                                        <p>BizsApp Brand is fixed of values, attributes, and layout concepts that display the spirit of Digrowfa Private Limited company. Using it always will fortify our ardor and dedication to connecting the sector thru real-time communication.</p>

                                        <ul>
                                            <li>
                                                <img src="/img/home/Ios-Icon.png" alt='Ios-Icon' className='img-fluid' />
                                            </li>
                                            <li>
                                                <img src="/img/home/Google-play.png" alt='Google-play' className='img-fluid' />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12'>
                                <div className={styles.header_img}>
                                    <img src="/img/branding/hand.png" alt='hand' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className={styles.animation_arrow}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
