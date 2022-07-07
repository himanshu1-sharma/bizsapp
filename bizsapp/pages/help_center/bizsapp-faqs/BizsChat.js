import styles from '../../../styles/HelpCenter.module.css';
import Navigation from '../../includes/Navigation';
import Footer from '../../includes/Footer';
import Faqs from '../Faqs';
import BizsChatQna from './BizsChatQna';
import HelpCenterList from '../HelpCenterList';
import MobilePanel from '../MobilePanel';

export default function BizsChat() {
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
                                        <h2 className="accordion-header" id="headingFaqsOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqs" aria-expanded="true" aria-controls="faqs">
                                                <img src="/img/icons/chat.png" alt="chat" className="img-fluid" />  BizsApp FAQ's
                                            </button>
                                        </h2>
                                        <div id="faqs" className="accordion-collapse collapse show" aria-labelledby="headingFaqsOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <Faqs />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <HelpCenterList />
                        </div>
                        {/* ==========mobile tabs====== */}
                        <MobilePanel />
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className={styles.page_content}>
                            <div className={styles.page_name}>
                                <h2>BizsChat</h2>
                            </div>
                            <BizsChatQna />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
};
