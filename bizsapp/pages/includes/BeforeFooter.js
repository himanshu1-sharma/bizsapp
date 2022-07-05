import styles from '../../styles/BeforeFooter.module.css';
import Link from 'next/link';


export default function FeatureFooter() {
    return (
        <>
            <section className="container-fluid p-0 mt-5">
                <div className={styles.before_footer_bg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className={styles.before_footer_content}>
                                    <h2>Download Now</h2>
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <img src="/img/home/Ios-Icon.png" alt='Ios-Icon' className='img-fluid' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <img src="/img/home/Google-play.png" alt='Ios-Icon' className='img-fluid' />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};


