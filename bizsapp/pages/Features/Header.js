import styles from '../../styles/Features.module.css';

export default function Header() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.header_bg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12'>
                                <div className='header_text_center'>
                                    <div className='header_text'>
                                        <h1>Top Features of BizsApp</h1>
                                        <p>Read & Explore great features of BizsApp, We developed BizsApp according to business needs.</p>
                                        <ul>
                                            <li>
                                                <img src="/img/home/Ios-Icon.png" alt='Ios-Icon' className='img-fluid' />
                                            </li>
                                            <li>
                                                <img src="/img/home/Google-play.png" alt='Ios-Icon' className='img-fluid' />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.header_phone}>
                            <img src="/img/features/header-phone.png" alt='header-phone' className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
