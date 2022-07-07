import styles from "../../styles/HelpCenter.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BizsAppFaqsAPI } from "../api/BizsAppFaqsAPI";


export default function Faqs() {

    const [listData, setListData] = useState(BizsAppFaqsAPI);
  
    const { asPath } = useRouter()

    return (
        <>
            <div className={styles.faqs_list}>
                <ul>
                    {listData.map((curElt) => {
                        {/* console.log(curElt) */}
                        const {iconName, pageName, name} = curElt;

                        return(
                            <>
                                <Link href={`/help_center/bizsapp-faqs/${pageName}`}>
                                    <li className={asPath === `/help_center/bizsapp-faqs/${pageName}` ? `${styles.nav_item} ${styles.active}` : 'nav_item'}><img src={`/img/icons/${iconName}.png`} alt="chat" className="img-fluid" /> {name}</li>
                                </Link>
                            </>
                        )
                    })}
                    
                </ul>
            </div>           
        </>
    )
};
