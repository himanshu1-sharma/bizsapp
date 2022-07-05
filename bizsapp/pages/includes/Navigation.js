import Link from "next/link"
import Image from "next/image"
import styles from '../../styles/Navigation.module.css';
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Navigation() {

    const { asPath } = useRouter()
    const [active, setActive] = useState(false);

    return (
        <>
            <div className="container-flud p-0">
                <div className={styles.navigation}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-md-10 col-sm-10 col-10">
                                <div className={styles.logo}>
                                    <div className={styles.mobile_hide}>
                                        <Link href="/">
                                            <img src="/img/logo/Logo.png" alt="logo" />
                                        </Link>
                                    </div>
                                    <div className={styles.desktop_hide}>
                                        <Link href="/">
                                            <img src="/img/logo/logo-white.png" alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-2 col-sm-2 col-2">
                                <div className={styles.nav_list}>
                                    <ul>
                                        <li>
                                            <Link href="/branding">
                                                <a className={asPath === '/branding' ? `${styles.nav_item} ${styles.active}` : 'nav_item'}>Branding</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/features">
                                                <a className={asPath === '/features' ? `${styles.nav_item} ${styles.active}` : 'nav_item'}>Features</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/download">
                                                <a className={asPath === '/download' ? `${styles.nav_item} ${styles.active}` : 'nav_item'}>Download</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/help_center">
                                                <a className={asPath === '/help_center' ? `${styles.nav_item} ${styles.active}` : 'nav_item'}>Help Center</a>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                                <div className={styles.menu} onClick={() => setActive(!active)}>
                                    <div className={active ? styles.active_menu_click : styles.menu_click}>
                                        <div className={`${styles.top} ${styles.menubar}`}></div>
                                        <div className={`${styles.middle} ${styles.menubar}`}></div>
                                        <div className={`${styles.bottom} ${styles.menubar}`}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========menu slider====== */}
            <div className={active ? styles.active_menu_slider : styles.menu_slider}>
                <ul>
                   
                        <Link href="/branding">
                            <li>
                                <a className={asPath === '/branding' ? `${styles.nav_item} ${styles.active}` : 'nav_item'}>Branding</a>
                            </li>
                        </Link>
                    
                   
                        <Link href="/features">
                            <li>
                            <a className={asPath === '/features' ? `${styles.nav_item} ${styles.active}` : 'nav_item'}>Features</a>
                            </li>
                        </Link>
                    
                        <Link href="/download">
                        <li>
                        <a className={asPath === '/download' ? `${styles.nav_item} ${styles.active}` : 'nav_item'}>Download</a>
                        </li>
                        </Link>
                   
                        <Link href="/help_center">
                            <li>
                            <a className={asPath === '/help_center' ? `${styles.nav_item} ${styles.active}` : 'nav_item'}>Help Center</a>
                            </li>
                        </Link>
                  

                </ul>
            </div>

        </>
    )
};
