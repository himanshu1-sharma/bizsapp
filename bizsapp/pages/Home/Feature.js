import styles from '../../styles/Home.module.css';
import Link from 'next/link'
import Image from 'next/image';

export default function Feature() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title text-center">
                            <h2>Our Top Feature For Our Users</h2>
                            <p>Read & Explore great Features of BizsApp, We Developed BizsApp <br />According to business Needs. </p>
                        </div>
                    </div>
                </div>
                <div className={styles.feature_slider_bg}>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className={styles.feature_slider}>
                                <div className="nav flex-column nav-pills me-3" id="v-pills-tab">
                                    <div className=" active" id="v-pills-one-tab" data-bs-toggle="pill" data-bs-target="#v-pills-one" aria-controls="v-pills-one">
                                        <div className={`${styles.feature_slider_card} ${styles.left}`}>
                                            <div className={styles.feature_active}>
                                                1
                                            </div>
                                            <div className={styles.feature_slider_content}>
                                                <h4>Business Management Card (BMC)</h4>
                                                <p>BizsApp Provide You Facilities to Create E-business Card for Business and User Can Easily Share Their Card with... <Link href="#">Read More</Link></p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="" id="v-pills-three-tab" data-bs-toggle="pill" data-bs-target="#v-pills-three" aria-controls="v-pills-three">
                                        <div className={`${styles.feature_slider_card} ${styles.left}`}>
                                            <div className={styles.feature_active}>
                                                3
                                            </div>
                                            <div className={styles.feature_slider_content}>
                                                <h4>Buzz</h4>
                                                <p>In Buzz Section of BizsApp User are message to other connected user very and easily, also user can create connection list... <Link href="#">Read More</Link></p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="" id="v-pills-five-tab" data-bs-toggle="pill" data-bs-target="#v-pills-five" aria-controls="v-pills-five">
                                        <div className={`${styles.feature_slider_card} ${styles.left}`}>
                                            <div className={styles.feature_active}>
                                                5
                                            </div>
                                            <div className={styles.feature_slider_content}>
                                                <h4>Freemium Application</h4>
                                                <p>BizsApp Is Freemium Application here user have both option paid and free almost all feature of BizsApp Application is free... <Link href="#">Read More</Link></p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className={`${styles.feature_slider} ${styles.phone_mokup}`}>
                                <div className={styles.feature_mokup}>
                                    <Image src='/img/home/feature-mokup.png' alt="feature" width={315} height={634} />
                                </div>
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-one" role="tabpanel" aria-labelledby="v-pills-one-tab">
                                        <div className={styles.feature_slider_img}>
                                            <Image src='/img/home/1.png' alt="feature" width={315} height={634} />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-two" role="tabpanel" aria-labelledby="v-pills-two-tab">
                                        <Image src='/img/home/2.png' alt="feature" width={315} height={634} />
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-three" role="tabpanel" aria-labelledby="v-pills-three-tab">
                                        <Image src='/img/home/3.png' alt="feature" width={315} height={634} />
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-four" role="tabpanel" aria-labelledby="v-pills-four-tab">
                                        <Image src='/img/home/4.png' alt="feature" width={315} height={634} />
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-five" role="tabpanel" aria-labelledby="v-pills-five-tab">
                                        <Image src='/img/home/1.png' alt="feature" width={315} height={634} />
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-six" role="tabpanel" aria-labelledby="v-pills-six-tab">
                                        <Image src='/img/home/2.png' alt="feature" width={315} height={634} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className={styles.feature_slider}>
                                <div className="nav flex-column nav-pills me-3" id="v-pills-tab">
                                    <div className="" id="v-pills-two-tab" data-bs-toggle="pill" data-bs-target="#v-pills-two" aria-controls="v-pills-two">
                                        <div className={`${styles.feature_slider_card} ${styles.right}`}>
                                            <div className={styles.feature_active}>
                                                2
                                            </div>
                                            <div className={styles.feature_slider_content}>
                                                <h4>Bizsshouts</h4>
                                                <p>BizsApp Gives You BizsShout Facilities in Bizsshouts User Share There 30-60 Second Business related video... <Link href="#">Read More</Link></p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="" id="v-pills-four-tab" data-bs-toggle="pill" data-bs-target="#v-pills-four" aria-controls="v-pills-four">
                                        <div className={`${styles.feature_slider_card} ${styles.right}`}>
                                            <div className={styles.feature_active}>
                                                4
                                            </div>
                                            <div className={styles.feature_slider_content}>
                                                <h4>Making Connection</h4>
                                                <p>In making Connection features user can make easily connection with other user according to business interest... <Link href="#">Read More</Link></p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="" id="v-pills-six-tab" data-bs-toggle="pill" data-bs-target="#v-pills-six" aria-controls="v-pills-six">
                                        <div className={`${styles.feature_slider_card} ${styles.right}`}>
                                            <div className={styles.feature_active}>
                                                6
                                            </div>
                                            <div className={styles.feature_slider_content}>
                                                <h4>Search or Find in BizsApp</h4>
                                                <p>In BizsApp Application user can search their relative, business person, colleagues, business partner and business... <Link href="#">Read More</Link> </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mobile_feature_slider}>
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12'>
                            <div className={styles.feature_mobile_card}>
                                <div className={styles.feature_active}>
                                    1
                                </div>
                                <div className={styles.feature_slider_content}>
                                    <h4>Business Management Card (BMC)</h4>
                                    <p>BizsApp Provide You Facilities to Create E-business Card for Business and User Can Easily Share Their Card with... <Link href="#">Read More</Link></p>

                                </div>
                            </div>
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12'>
                            <div className={styles.feature_mobile_card}>
                                <div className={styles.feature_active}>
                                    2
                                </div>
                                <div className={styles.feature_slider_content}>
                                    <h4>Bizsshouts</h4>
                                    <p>BizsApp Gives You BizsShout Facilities in Bizsshouts User Share There 30-60 Second Business related video... <Link href="#">Read More</Link></p>

                                </div>
                            </div>
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12'>
                            <div className={styles.feature_mobile_card}>
                                <div className={styles.feature_active}>
                                    3
                                </div>
                                <div className={styles.feature_slider_content}>
                                    <h4>Buzz</h4>
                                    <p>In Buzz Section of BizsApp User are message to other connected user very and easily, also user can create connection list... <Link href="#">Read More</Link></p>

                                </div>
                            </div>
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12'>
                            <div className={styles.feature_mobile_card}>
                                <div className={styles.feature_active}>
                                    4
                                </div>
                                <div className={styles.feature_slider_content}>
                                    <h4>Making Connection</h4>
                                    <p>In making Connection features user can make easily connection with other user according to business interest... <Link href="#">Read More</Link></p>

                                </div>
                            </div>
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12'>
                            <div className={styles.feature_mobile_card}>
                                <div className={styles.feature_active}>
                                    5
                                </div>
                                <div className={styles.feature_slider_content}>
                                    <h4>Freemium Application</h4>
                                    <p>BizsApp Is Freemium Application here user have both option paid and free almost all feature of BizsApp Application is free... <Link href="#">Read More</Link></p>

                                </div>
                            </div>
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12'>
                            <div className={styles.feature_mobile_card}>
                                <div className={styles.feature_active}>
                                    6
                                </div>
                                <div className={styles.feature_slider_content}>
                                    <h4>Search or Find in BizsApp</h4>
                                    <p>In BizsApp Application user can search their relative, business person, colleagues, business partner and business... <Link href="#">Read More</Link></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className={styles.all_features_btn}>
                            <Link href="/features">
                                <button>Explore features</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
