import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/HelpCenter.module.css";
import { HelpCenterListAPI } from "../api/HelpCenterListAPI";
import { useState } from 'react';


export default function HelpCenterList() {
    const [listName, setListName] = useState(HelpCenterListAPI);
    const { asPath } = useRouter();
    return (
        <>
            <ul>
                {listName.map((curElt) => {
                    const {iconName, name, pageName} = curElt;
                    return(
                        <>
                            <Link href={`/help_center/${pageName}`}>
                                <li className={asPath === `/help_center/${pageName}` ? `${styles.nav_item} ${styles.active}` : 'nav_item'}><img src={`/img/icons/${iconName}.png`} alt="chat" className="img-fluid" /> {name}</li>
                            </Link>
                        </>
                    )
                })}
            </ul>
        </>
        
    )
};
