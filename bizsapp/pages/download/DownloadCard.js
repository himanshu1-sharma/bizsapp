import { useState } from "react";
import { Card } from "../api/DownloadCardApi";
import styles from '../../styles/Download.module.css';
import Image from "next/image";

export default function DownloadCard() {

    const [cardData, setCardData] = useState(Card);
    return (
        <>
            <div className="container">
                <div className="row mt-5 ">
                    <div className="col-lg-12">
                        <div className="title text-center">
                            <h2>Why Download BizsApp</h2>
                            <p>Read & Explore great Features of BizsApp, We Developed BizsApp <br />According to business Needs. </p>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {cardData.map((curElt) => {
                        console.log(cardData)
                        const { imgSrc, title, desc } = curElt;
                        return (
                            <>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className={styles.card_box}>
                                        <Image src={`/img/download/${imgSrc}.png`} width={92} height={92} alt="icon" />
                                        <h4>{title}</h4>
                                        <p>{desc}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}


                </div>
            </div>
        </>
    )
};
