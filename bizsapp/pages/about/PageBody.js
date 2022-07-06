import styles from '../../styles/About.module.css';

export default function PageBody() {
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                        <div className={styles.content}>
                            <h2>Vision</h2>
                            <p>With the help of BizsApp, our vision is to help each and every business person <br />represent their business and grow business worldwide.</p>
                        </div>
                    </div>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                        <div className={styles.content}>
                            <h2>Mission</h2>
                            <p>BizsApp The word "Bizs" stands for business. The BizsApp team is dedicated to <br />creating solutions for the needs of the business community.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
