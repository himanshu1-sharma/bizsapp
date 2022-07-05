import styles from '../../styles/CubeCard.module.css';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";

// import required modules
import { EffectCube } from "swiper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, faEnvelope, faGlobe, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
import Link from "next/link";
import Head from 'next/head'
// import * as React from "react";
import { ObjectId } from "mongodb";
import { pageURL } from "../../utils/PageURL";
import { connectToDatabase } from "../../lib/mongodb";

export default function CubeBMC({ properties }) {
    return (
        <>
            {properties && properties.map(properties => {
                const [copied, setCopied] = useState(false);
                function copy() {
                    const el = document.createElement("input");
                    el.value = window.location.href;
                    document.body.appendChild(el);
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand("copy");
                    document.body.removeChild(el);
                    setCopied(true);
                }
                return (
                    <>
                        <div className="cube_card">
                            <Swiper
                                effect={"cube"}
                                grabCursor={true}
                                cubeEffect={{
                                    shadow: true,
                                    slideShadows: true,
                                    shadowOffset: 20,
                                    shadowScale: 0.94,
                                }}
                                modules={[EffectCube]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <section className={styles.flip_card_main_box} id={properties.user}>
                                        <div className={styles.flip_card}>
                                            <div className={styles.content}>
                                                <div className={styles.front}>
                                                    <div className={styles.inner}>
                                                        <div className={styles.card_header}>
                                                            <p>Business Management Card</p>
                                                            <div className={styles.company_logo}>
                                                                <img src={properties.brandLogo} className="img-fluid" />

                                                                {/* <Image src="/{properties.brandLogo}" width={113} height={113} alt="company_logo" /> */}
                                                            </div>
                                                        </div>
                                                        <div className={styles.company_about}>
                                                            <div>
                                                                <div className={styles.company_name}>
                                                                    <h1>{properties.brandName}</h1>
                                                                </div>
                                                                <div className={styles.card_holder_name}>
                                                                    <i>{properties.businessName}</i>
                                                                </div>
                                                                <div className={styles.company_description}>
                                                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={styles.detail_box}>
                                                            <div className={`${styles.social_link} ${styles.social_link_box}`}>
                                                                <p>Social Links</p>
                                                                <ul>
                                                                    {properties.socialLinks.map((curElt) => {
                                                                        {/* console.log(curElt) */ }
                                                                        return (
                                                                            <>
                                                                                <a href={curElt.link}>
                                                                                    {curElt.socialLinkType === "Facebook" &&
                                                                                        <li>
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                                                                                        </li>
                                                                                    }
                                                                                    {curElt.socialLinkType === "Instagram" &&
                                                                                        <li>
                                                                                            <FontAwesomeIcon icon={faInstagram} />
                                                                                        </li>
                                                                                    }
                                                                                    {curElt.socialLinkType === "Youtube" &&
                                                                                        <li>
                                                                                            <FontAwesomeIcon icon={faYoutube} />
                                                                                        </li>
                                                                                    }
                                                                                    {curElt.socialLinkType === "LinkedIn" &&
                                                                                        <li>
                                                                                            <FontAwesomeIcon icon={faLinkedin} />
                                                                                        </li>
                                                                                    }
                                                                                    {curElt.socialLinkType === "Twitter" &&
                                                                                        <li>
                                                                                            <FontAwesomeIcon icon={faTwitter} />
                                                                                        </li>
                                                                                    }

                                                                                </a>
                                                                            </>
                                                                        )
                                                                    })}

                                                                </ul>
                                                            </div>

                                                            <div className={`${styles.social_link} ${styles.business_day}`}>
                                                                <p>Business Days</p>
                                                                <ul>
                                                                    {properties.businessDays.map((curElt) => {
                                                                        {/* console.log("acb",curElt) */ }
                                                                        return (
                                                                            <>
                                                                                <li><p>{curElt.substr(0, 3)}</p></li>
                                                                            </>
                                                                        )
                                                                    })}

                                                                </ul>
                                                            </div>

                                                            <div className={styles.detail_text_effect_shadow}>
                                                                <Image src="/img/icons/shadow.png" width={139} height={27} alt="detail_shadow" />
                                                            </div>
                                                            <div className={styles.detail_text_effect}>
                                                                Details
                                                            </div>
                                                        </div>
                                                        <div className={styles.enquiry_box}>
                                                            <ul>
                                                                {properties.email &&
                                                                    <li>
                                                                        <div className={styles.enquiry_box_content}>
                                                                            <div>
                                                                                <FontAwesomeIcon icon={faEnvelope} />
                                                                            </div>
                                                                            <div>
                                                                                {properties.email}
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.enquiry_box_content}>
                                                                            <a href={"mailto:" + properties.email}>
                                                                                <button> Send Mail</button>
                                                                            </a>
                                                                        </div>
                                                                    </li>
                                                                }

                                                                {properties.websiteLink &&
                                                                    <li>
                                                                        <div className={styles.enquiry_box_content}>
                                                                            <div>
                                                                                <FontAwesomeIcon icon={faGlobe} />
                                                                            </div>
                                                                            <div>
                                                                                {properties.websiteLink}
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.enquiry_box_content}>
                                                                            <a href={properties.websiteLink} target="_blank">
                                                                                <button>Visit Website</button>
                                                                            </a>
                                                                        </div>
                                                                    </li>
                                                                }


                                                                {properties.address &&
                                                                    <li>
                                                                        <div className={styles.enquiry_box_content}>
                                                                            <div>
                                                                                <FontAwesomeIcon icon={faLocationDot} />
                                                                            </div>
                                                                            <div>
                                                                                {properties.address}
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.enquiry_box_content}>
                                                                            <Link href="https://goo.gl/maps/SfoXVabwnLBhSBHD9">
                                                                                <button> Get Location</button>
                                                                            </Link>
                                                                        </div>
                                                                    </li>
                                                                }

                                                            </ul>
                                                        </div>
                                                        <div className={styles.business_card_footer}>
                                                            <div className={styles.business_card_footer_button}>
                                                                <Link href={"tel:+91" + properties.contacts[0].contactNumber}>
                                                                    <Image src="/img/icons/call.png" alt='call_icon' width={27} height={27} />
                                                                </Link>
                                                            </div>
                                                            <div className={styles.business_card_footer_button}>
                                                                <Link href="#">
                                                                    <Image src="/img/icons/chat.png" alt='chat_icon' width={27} height={27} />
                                                                </Link>
                                                            </div>
                                                            <div className={styles.business_card_footer_button}>
                                                                {/* <Link href="https://wa.me/919910067051?text=Hello Digrowfa ">
                                                        
                                                    </Link> */}
                                                                <a href={"https://wa.me/+91" + properties.contacts[1].contactNumber + "?text=Hello " + properties.businessName} >
                                                                    <Image src="/img/icons/whatsapp.png" alt='whatsapp_icon' width={27} height={27} />
                                                                </a>
                                                            </div>
                                                            <div className={styles.business_card_footer_button}>
                                                                <Link href="#">
                                                                    <Image src="/img/icons/share.png" alt='share_icon' width={27} height={27} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" />
                                                                </Link>
                                                                <div className='card_share_modal'>
                                                                    <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">

                                                                        <div className="offcanvas-body small">
                                                                            <div className={styles.share_card_content}>
                                                                                <h2>Share Via</h2>

                                                                                <div className={styles.share_media}>
                                                                                    <ul>
                                                                                        <li>
                                                                                            <a onClick={copy}>
                                                                                                <Image src="/img/cardIcon/copy.png" alt="copy_to_clipboard" width={35} height={35} />
                                                                                                <div className={styles.icon_name}>{!copied ? "Copy to clipboard" : "Copied!"}</div>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href={"https://www.facebook.com/sharer/sharer.php?u=localhost:3001/ecardDesign/EcardDesign?id=" + properties.user}>
                                                                                                <Image src="/img/cardIcon/facebook.png" alt="facebook" width={35} height={35} />
                                                                                                <div className={styles.icon_name}>
                                                                                                    Facebook
                                                                                                </div>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href={`whatsapp://send?text=${pageURL}${properties.user}`}>
                                                                                                <Image src="/img/cardIcon/whatsapp.png" alt="whatsapp" width={35} height={35} />
                                                                                                <div className={styles.icon_name}>
                                                                                                    Whatsapp
                                                                                                </div>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a>
                                                                                                <Image src="/img/cardIcon/gmail.png" alt="gmail" width={35} height={35} />
                                                                                                <div className={styles.icon_name}>
                                                                                                    Gmail
                                                                                                </div>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>


                                            </div>

                                        </div>


                                    </section>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <section className={styles.flip_card_main_box} id={properties.user}>
                                        <div className={styles.flip_card}>
                                            <input type="checkbox" id="card1" className={styles.more} aria-hidden="true" />
                                            <div className={styles.content}>
                                                

                                                <div className={styles.back}>
                                                    <div className={styles.inner}>
                                                        {properties.brandVideo ? (

                                                            <div className={styles.video_box}>
                                                                <video controls>
                                                                    <source src={properties.brandVideo} type="video/mp4" />
                                                                    Your browser does not support the video tag.
                                                                </video>
                                                            </div>

                                                        ) :
                                                            (
                                                                <div className={styles.card_video_logo}>
                                                                    <div className={styles.card_back_logo_outline}>
                                                                        <div className={styles.card_back_logo}>
                                                                            <Image src="/img/ecard/bizsapp-logo.svg" alt='BizsApp' width={151} height={140} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )

                                                        }

                                                        
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                    </section>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </>
                )

            })}



        </>
    )

};


export async function getServerSideProps(context) {

    const id = context.query.id.toString();

    const { db } = await connectToDatabase()

    const data = await db.collection("businesscards").find({ user: ObjectId(id) }).toArray()

    const properties = JSON.parse(JSON.stringify(data));

    return {
        props: { properties: properties },
    }

};