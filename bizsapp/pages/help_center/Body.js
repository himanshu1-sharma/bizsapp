import styles from "../../styles/HelpCenter.module.css";
import { useRouter } from "react"
import Link from "next/link";
import Faqs from "./Faqs";
import HelpCenterList from "./HelpCenterList";



export default function Body() {

    // const { asPath } = useRouter();

    return (
        <>
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
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">

                    </div>
                </div>
            </div>
        </>
    )
};
