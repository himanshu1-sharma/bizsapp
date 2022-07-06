import Accordion from 'react-bootstrap/Accordion'

export default function BMCQna() {
    return (
        <>
            <div className='q_and_a'>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How Can I Upload Video On BMC?</Accordion.Header>
                        <Accordion.Body>
                            <p>You Can Easily Upload Your Video On BMC</p>
                            <p>Step 1: Grant BizsApp access to your camera and gallery.</p>
                            <p>Step 2: Click the Upload Button.</p>
                            <p>Step 3: Act quickly! Your BMC Video Upload</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Can I Share My BMC with Anyone?</Accordion.Header>
                        <Accordion.Body>
                            <p>Yes, you can share your BMC with anyone in BizsApp.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Is it possible to make my card private? </Accordion.Header>
                        <Accordion.Body>
                            <p>Yes, you can easily make your card private.
                                Click on the "Edit" button. You will encrypt your card in the Edit Section by clicking on that option.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Is Business Management Card by BizsApp Free of Cost?</Accordion.Header>
                        <Accordion.Body>
                            <p>Yes, BizsApp Is Totally Free. In fact, All Features On BizsApp Are Free of Cost.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Can I Make Two Different Cards by Using the Same Number?</Accordion.Header>
                        <Accordion.Body>
                            <p>No, this is not currently possible. The user creates one card by using a single phone number.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
};
