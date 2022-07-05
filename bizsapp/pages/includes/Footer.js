import styles from '../../styles/Footer.module.css';
import Link from 'next/link';
import { SocialMediaIconsReact } from 'social-media-icons-react';

export default function Footer() {
    return (
        <>
            <section className='container-fluid p-0'>
                <div className={styles.footer_bg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                <div className={styles.footer_logo}>
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <img src="/img/logo/logo-white.png" alt="logo" className="logo_img img-fluid" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="http://digrowfa.com/" target="_blank">
                                                <img src="/img/logo/Digrowfa-green.png" alt="Digrowfa_logo" className="logo_img img-fluid" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.footer_content}>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12'>
                                <div className={styles.footer_list}>
                                    <h2>Company</h2>
                                    <ul>
                                        <li>
                                            <Link href="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link href="">Terms & Conditions</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12'>
                                <div className={styles.footer_list}>
                                    <h2>BizsApp</h2>
                                    <ul>
                                        <li>
                                            <Link href="/features">Features</Link>
                                        </li>
                                        <li>
                                            <Link href="/branding">Branding</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12'>
                                <div className={styles.footer_list}>
                                    <h2>Download</h2>
                                    <ul>
                                        <li>
                                            <Link href="">ISO</Link>
                                        </li>
                                        <li>
                                            <Link href="">Android</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className={styles.copyright_row}>
                                    <div className={styles.copyright_text}>
                                        <p>Copyright © 2022 BizsApp. All Rights Reserved</p>
                                    </div>

                                    <div className={styles.footer_social_media}>
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <div className={styles.footer_social_media_icon}>
                                                        <SocialMediaIconsReact icon="youtube"></SocialMediaIconsReact>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.facebook.com/BizsApp/">
                                                    <div className={styles.footer_social_media_icon}>
                                                    <SocialMediaIconsReact icon="facebook"></SocialMediaIconsReact>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://instagram.com/bizsapp/">
                                                    <div className={styles.footer_social_media_icon}>
                                                        <SocialMediaIconsReact icon="instagram"></SocialMediaIconsReact>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <div className={styles.footer_social_media_icon}>
                                                        <SocialMediaIconsReact icon="linkedin"></SocialMediaIconsReact>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://twitter.com/BizsApp/">
                                                    <div className={styles.footer_social_media_icon}>
                                                        <SocialMediaIconsReact icon="twitter"></SocialMediaIconsReact>
                                                    </div>
                                                </Link>
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
