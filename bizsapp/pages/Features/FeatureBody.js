import styles from '../../styles/Features.module.css';
import Image from 'next/image';
import ColorPalette from '../includes/ColorPalette';


export default function FeatureBody() {
    return (
        <>
            <ColorPalette />

            <section className='container-fluid p-0'>
                <div className={styles.feature_page_bg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id='second'>
                                <div className={styles.feature_card_section}>
                                    <div className={styles.mobile_feature_name}>
                                        <h2><span>01.</span> Business Management Card (BMC)</h2>
                                    </div>
                                    <div className={styles.feature_card_img}>
                                        <Image src="/img/features/buzz.png" alt='feature' width={339} height={684} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id='first'>
                                <div className={styles.feature_card_section}>
                                    <div className={styles.feature_content}>
                                        <h2><span>01.</span> Business Management Card (BMC)</h2>
                                        <p>BizsApp Provide You Facilities to Create E-business Card for Business and User Can Easily Share Their Card with Anyone they want.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id='first'>
                                <div className={styles.feature_card_section}>
                                    <div className={`${styles.feature_content} ${styles.left}`}>
                                        <h2><span>02.</span> Bizsshouts</h2>
                                        <p>BizsApp Gives You BizsShout Facilities in Bizsshouts User Share There 30-60 Second Business related video by the help of Shouts user or businessman can promote and give latest update about their business and get best result for their business. </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id='second'>
                                <div className={styles.feature_card_section}>
                                    <div className={styles.mobile_feature_name}>
                                        <h2><span>02.</span> Bizsshouts</h2>
                                    </div>
                                    <div className={styles.feature_card_img}>
                                        <Image src="/img/features/buzz.png" alt='feature' width={339} height={684} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id='second'>
                                <div className={styles.feature_card_section}>
                                    <div className={styles.mobile_feature_name}>
                                        <h2><span>03.</span> Buzz</h2>
                                    </div>
                                    <div className={styles.feature_card_img}>
                                        <Image src="/img/features/buzz.png" alt='feature' width={339} height={684} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id='first'>
                                <div className={styles.feature_card_section}>
                                    <div className={styles.feature_content}>
                                        <h2><span>03.</span> Buzz</h2>
                                        <p>In Buzz Section of BizsApp User are message to other connected user very and easily, also user can create connection list according to their preference by buzz user share media, document and many more thing very easily. .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id='first'>
                                <div className={styles.feature_card_section}>
                                    <div className={`${styles.feature_content} ${styles.left}`}>
                                        <h2><span>04.</span> Making Connection</h2>
                                        <p>In making Connection features user can make easily connection with other user according to business interest making connection is very beneficial for user this feature is very helpful for user for the growth of business and also this features are making brand value and face value of user. </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id='second'>
                                <div className={styles.feature_card_section}>
                                    <div className={styles.mobile_feature_name}>
                                        <h2><span>04.</span> Making Connection</h2>
                                    </div>
                                    <div className={styles.feature_card_img}>
                                        <Image src="/img/features/buzz.png" alt='feature' width={339} height={684} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id='second'>
                                <div className={styles.feature_card_section}>
                                    <div className={styles.mobile_feature_name}>
                                        <h2><span>05.</span> Freemium Application</h2>
                                    </div>
                                    <div className={styles.feature_card_img}>
                                        <Image src="/img/features/buzz.png" alt='feature' width={339} height={684} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id='first'>
                                <div className={styles.feature_card_section}>
                                    <div className={styles.feature_content}>
                                        <h2><span>05.</span> Freemium Application</h2>
                                        <p>BizsApp Is Freemium Application here user have both option paid and free almost all feature of BizsApp Application is free of Cost but some feature of application is paid.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id='first'>
                                <div className={styles.feature_card_section}>
                                    <div className={`${styles.feature_content} ${styles.left}`}>
                                        <h2><span>06.</span> Search or Find in BizsApp</h2>
                                        <p>In BizsApp Application user can search their relative, business person, colleagues, business partner and business and get details about business after making connection.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id='second'>
                                <div className={styles.feature_card_section}>
                                    <div className={styles.mobile_feature_name}>
                                        <h2><span>06.</span> Search or Find in BizsApp</h2>
                                    </div>
                                    <div className={styles.feature_card_img}>
                                        <Image src="/img/features/buzz.png" alt='feature' width={339} height={684} />
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
