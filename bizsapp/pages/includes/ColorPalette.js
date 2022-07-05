import styles from '../../styles/ColorPalette.module.css';
import Image from 'next/image';

export default function ColorPalette() {
    return(
        <>
             <section className="container-fluid p-0">
                <div className={styles.color_palette_bg}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className={styles.title}>
                                    <h2>Color Palette</h2>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className={styles.color_plate_box}>
                                <div className={styles.color_plate}>
                                    <div className={styles.color_plate_img}>
                                        <Image src="/img/features/GREEN_PIGMENT.svg" alt='Green(pigment)' width={239} height={239} />
                                    </div>
                                    <div className={styles.color_plate_name}>
                                        <div className={`${styles.color_plate_sample} ${styles.one}`}></div>
                                        <h4>Green (Pigment)</h4>
                                        <p>#0aa84c</p>
                                    </div>
                                </div>
                                <div className={styles.color_plate}>
                                    <div className={styles.color_plate_img}>
                                        <Image src="/img/features/ufo-green.svg" alt='ufo-green' width={239} height={239} />
                                    </div>
                                    <div className={styles.color_plate_name}>
                                        <div className={`${styles.color_plate_sample} ${styles.two}`}></div>
                                        <h4>UFO Green</h4>
                                        <p>#25d365</p>
                                    </div>
                                </div>
                                <div className={styles.color_plate}>
                                    <div className={styles.color_plate_img}>
                                        <Image src="/img/features/celadon.svg" alt='celadon' width={239} height={239} />
                                    </div>
                                    <div className={styles.color_plate_name}>
                                        <div className={`${styles.color_plate_sample} ${styles.three}`}></div>
                                        <h4>Celadon</h4>
                                        <p>#a7e4b8</p>
                                    </div>
                                </div>
                                <div className={styles.color_plate}>
                                    <div className={styles.color_plate_img}>
                                        <Image src="/img/features/dark-gunmetal.svg" alt='dark-gunmetal' width={239} height={239} />
                                    </div>
                                    <div className={styles.color_plate_name}>
                                        <div className={`${styles.color_plate_sample} ${styles.four}`}></div>
                                        <h4>Dark Gunmetal</h4>
                                        <p>#1d2a29</p>
                                    </div>
                                </div>
                                <div className={styles.color_plate}>
                                    <div className={styles.color_plate_img}>
                                        <Image src="/img/features/dark-silver.svg" alt='dark-silver' width={239} height={239} />
                                    </div>
                                    <div className={styles.color_plate_name}>
                                        <div className={`${styles.color_plate_sample} ${styles.five}`}></div>
                                        <h4>Dark Silver</h4>
                                        <p>#707070</p>
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
