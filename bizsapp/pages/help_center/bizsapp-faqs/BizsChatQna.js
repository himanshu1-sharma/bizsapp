import Accordion from 'react-bootstrap/Accordion'
import styles from '../../../styles/HelpCenter.module.css';

export default function BizsChatQna() {
    return(
        <>
            <div className={styles.content}>
            <div className='q_and_a'>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Is there any blocking option on BizsChat?</Accordion.Header>
                        <Accordion.Body>
                            <p>Yes, You Can Easily Block Any User If You Want.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Can the user sends a message request to any user if the user wants to send it?</Accordion.Header>
                        <Accordion.Body>
                            <p>Yes, You Can Easily Send a Message Request to any user, but in the case of a message request-reply, first the user has to accept the message request after they reply.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Can the user make an unlimited list according to the requirement? </Accordion.Header>
                        <Accordion.Body>
                            <p>Yes, the user can create an unlimited list according to the user's requirements.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Can the user share media files over the chat with the other BizsApp users?</Accordion.Header>
                        <Accordion.Body>
                            <p>Yes, BizsApp provides these facilities so the user can share media files with their connections.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Does BizsChat support voice messages?</Accordion.Header>
                        <Accordion.Body>
                            <p>Yes, Users Will Share Voice Messages Easily</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            </div>
        </>
    )
};
