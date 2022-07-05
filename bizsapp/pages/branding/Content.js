import styles from '../../styles/Branding.module.css';

export default function Content() {
    return(
        <>
            <div className='container'>
                <div className={styles.overlay}>
                <div className='row mb-5'>
                    <div className='col-xl-6 col-lg-6 col-lg-6 col-md-12 col-12'>
                        <div className={styles.content_img}>
                            <img src="/img/branding/picture.png" alt="pictur" className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-lg-6 col-md-12 col-12'>
                        <div className={styles.content_box}>
                            <h2>Introduction </h2>
                            <p>As a circumstance for the usage of the BizsApp logo assets ("BizsApp Brand Resources"), you settle to all of the recommendations and commands below</p>
                            <p><b>("Guidelines")</b></p>
                            <p>These Guidelines make clear the approaches you could and cannot use the BizsApp Brand Resources for advertising and marketing and different purposes. These Guidelines additionally include legal disclosures and a standard set of questions and solutions that deal with common inquiries and concerns. </p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className={styles.content_box}>
                        <h2>General Guidelines</h2>
                        <p>Use the BizsApp name and logos found on our BizsApp Brand Guidelines website only, and not those found anywhere else. Make sure you check the BizsApp Brand Resources in these Guidelines often to ensure you're using the most current version.</p>
                        <h2>How to Use Logo</h2>
                        <p>Do not use other <b>trademarks, names, domain names, logos,</b> or other <b>content</b> that could be confused with <span><b>BizsApp</b></span>.</p>
                        <p>When you're discussing BizsApp, always capitalize the letters <span><b>"B"</b></span> and <span><b>"A"</b></span> and never modify or abbreviate the word <span><b>"BizsApp"</b></span>.</p>
                        <p>Remember to display the word <span><b>BizsApp</b></span> in the same font size and style as the content surrounding it, and never use any of the BizsApp logos to replace the word BizsApp in a sentence.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12'>
                        <div className={`${styles.contant_card} ${styles.dark}`}>
                            <img src="/img/branding/content-1.png" alt='logo' className='img-fluid' />
                        </div>
                        <div className={styles.card_name}>
                            <h4>Icon With Background</h4>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12'>
                        <div className={`${styles.contant_card} ${styles.dark}`}>
                            <img src="/img/branding/content-2.png" alt='logo' className='img-fluid' />
                        </div>
                        <div className={styles.card_name}>
                            <h4>Logo With Background</h4>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12'>
                        <div className={styles.contant_card}>
                            <img src="/img/branding/content-1.png" alt='logo' className='img-fluid' />
                        </div>
                        <div className={styles.card_name}>
                            <h4>Icon Without Background</h4>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12'>
                        <div className={styles.contant_card}>
                            <img src="/img/branding/content-3.png" alt='logo' className='img-fluid' />
                        </div>
                        <div className={styles.card_name}>
                            <h4>Logo Without Background</h4>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
};
