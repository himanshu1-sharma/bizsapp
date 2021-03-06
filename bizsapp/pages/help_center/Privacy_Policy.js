import styles from "../../styles/HelpCenter.module.css";
import Link from "next/link";
import Faqs from "./Faqs";
import Navigation from '../includes/Navigation';
import Footer from '../includes/Footer';
import HelpCenterList from "./HelpCenterList";
import MobilePanel from "./MobilePanel";

import Head from "next/head";


export default function Privacy_Policy() {

    return (
        <>

            <Head>
                <meta name="description" content="Generated by Bizsapp" />
                <link rel="icon" href="/img/favicon.svg" />
                <title>BizsApp | The Business App</title>
            </Head>

            <Navigation />

            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className={styles.left_panel}>
                            <div className="left_accordion">

                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-faqs" aria-expanded="false" aria-controls="flush-faqs">
                                                <img src="/img/icons/chat.png" alt="chat" className="img-fluid" />  BizsApp FAQ's
                                            </button>
                                        </h2>
                                        <div id="flush-faqs" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <Faqs />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <HelpCenterList />

                            </div>
                        </div>
                        {/* ==========mobile tabs====== */}
                        <MobilePanel />
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className={styles.page_content}>
                            <div className={styles.page_name}>
                                <h2>Privacy & Policy</h2>
                            </div>
                            <div className={styles.content}>
                                <p>Digrowfa Private Limited built the BizsApp mobile application as a Business App. This SERVICE is provided by Digrowfa Private Limited at no cost and also on cost and is intended for use as is.</p>
                                <p>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
                                    If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                                </p>
                                <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at BizsApp unless otherwise defined in this Privacy Policy.</p>
                                <h4>Information Collection and Use</h4>
                                <p>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Name, Phone Number, Location, Mail Address, business details, social media account. The information that we request will be retained by us and used as described in this privacy policy.</p>
                                <p>The app does use third-party services that may collect information used to identify you.</p>
                                <p>Link to the privacy policy of third-party service providers used by the app</p>
                                <ul>
                                    <li>
                                        <Link href="#">
                                            Google Play Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Google Analytics for Firebase
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Firebase Crashlytics
                                        </Link>
                                    </li>
                                </ul>
                                <h4>Log Data</h4>
                                <p>We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (???IP???) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.</p>
                                <h4>Cookies</h4>
                                <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.</p>
                                <p>This Service does not use these ???cookies??? explicitly. However, the app may use third-party code and libraries that use ???cookies??? to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>
                                <h4>Service Providers</h4>
                                <p>We may employ third-party companies and individuals due to the following reasons:</p>
                                <ul>
                                    <li>To facilitate our Service;</li>
                                    <li>To provide the Service on our behalf;</li>
                                    <li>To perform Service-related services; or</li>
                                    <li>To assist us in analysing how our Service is used.</li>
                                </ul>
                                <p>We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
                                <h4>Security</h4>
                                <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
                                <h4>Links to Other Sites</h4>
                                <p>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
                                <h4>Children???s Privacy</h4>
                                <p>These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.</p>
                                <h4>Changes to This Privacy Policy</h4>
                                <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
                                    This policy is effective as of 2022-06-09
                                </p>
                                <h4>Contact Us</h4>
                                <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <Link href="mailto:support@bizsapp.com">support@bizsapp.com</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
};
