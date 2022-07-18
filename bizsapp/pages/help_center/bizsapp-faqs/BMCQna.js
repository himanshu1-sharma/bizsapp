import Accordion from 'react-bootstrap/Accordion'
import styles from '../../../styles/HelpCenter.module.css';

export default function BMCQna() {
    return (
        <>
            <div className={styles.content}>
            <div className='q_and_a'>
                <Accordion defaultActiveKey="0" flush>
                    
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Can I Share My BMC with Anyone?</Accordion.Header>
                        <Accordion.Body>
                            <p>Yes, you can share your BMC with anyone in BizsApp or any other platform.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Is it possible to make my card private? </Accordion.Header>
                        <Accordion.Body>
                            <p>Yes, you can easily make your card private.
                                Click on the "Edit" button. You will encrypt your card in the Edit Section by clicking on that option "Private".</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Is Business Management Card by BizsApp Free of Cost?</Accordion.Header>
                        <Accordion.Body>
                            <p>Yes, BizsApp Is Totally Free. In fact, All Features On BizsApp Are Free of Cost.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Can I Make Two Different Cards by Using the Same Number?</Accordion.Header>
                        <Accordion.Body>
                            <p>No, You can not create two cards by using a single phone number. In simple words "One account, one BMC".</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            </div>
        </>
    )
};
