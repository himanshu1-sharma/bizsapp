import styles from '../../../styles/HelpCenter.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog, faCompass, faLock, faListAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Navigation from '../../includes/Navigation';
import Footer from '../../includes/Footer';
import Faqs from '../Faqs';

export default function Shouts() {
    return (
        <>
            <Navigation />


            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className={styles.left_panel}>
                            <div className="left_accordion">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <img src="/img/icons/chat.png" alt="chat" className="img-fluid" />  BizsApp FAQ's
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <Faqs />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className={styles.page_content}>
                            <div className={styles.page_name}>
                                <h2>Shouts</h2>
                            </div>
                            <div className='q_and_a'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
};
