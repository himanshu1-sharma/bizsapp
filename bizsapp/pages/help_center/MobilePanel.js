import Accordion from 'react-bootstrap/Accordion'
import Faqs from './Faqs'
import HelpCenterList from './HelpCenterList'
import styles from "../../styles/HelpCenter.module.css";


export default function MobilePanel() {
    return (
        <>
            <div className={styles.mobile_panel}>
                <div className="mobile_accordion">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How can we help you?</Accordion.Header>
                            <Accordion.Body>
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
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </>
    )
};
