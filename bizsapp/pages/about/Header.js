import styles from '../../styles/About.module.css';
import Image from 'next/image';

export default function Header() {
    return (
        <>
            <section className='container-fluid p-0'>
                <div className={styles.header_bg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className='header_text_center'>
                                    <div className='header_text text-center'>
                                    <Image src="/img/branding/content-1.png" alt='logo_icon' width={124} height={128} />
                                        <h1>About Bizsapp</h1>
                                        <p>The BizsApp Application is developed or designed for the business community. <br />BizsApp will assist business owners in easily managing, promoting, <br />and generating sales for their company.</p>
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
