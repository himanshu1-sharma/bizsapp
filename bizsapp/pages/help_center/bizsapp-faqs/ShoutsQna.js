import Accordion from 'react-bootstrap/Accordion'

export default function ShoutsQna() {
    return (
        <>
            <div className='q_and_a'>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How Can I Upload Shouts? </Accordion.Header>
                        <Accordion.Body>
                            <p>Uploading Shouts On BizsApp Is a Very Easy Process.</p>
                            <p>Step 1: Grant BizsApp access to your camera and gallery.</p>
                            <p>Step 2: Click the Upload Button.</p>
                            <p>Step 3: Act quickly! Your Shouts Are Visible In The Shouts Section</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Is Shout Beneficial for Business?</Accordion.Header>
                        <Accordion.Body>
                            <p>Shouts Will Assist You in Promoting Your Business and Increasing Engagement in Your Business.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What Is the Time Duration of Shouts? </Accordion.Header>
                        <Accordion.Body>
                            <p>Time Duration Of Shouts Is Up to 30 Second to 60 Second </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How Can I Explore Other Shouts?</Accordion.Header>
                        <Accordion.Body>
                            <p>And, in BizsApp, there are two ways to explore other users' shouts.</p>
                            <ol>
                                <li>If the user is your connection, which means the user is in your connection list, you will get their shouts in the My Shouts section.</li>
                                <li>If the user is not your connection, you will explore shouts in the All Shouts Section according to your interests.</li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Can I Upload Video and Images at the Same Time in Shouts?</Accordion.Header>
                        <Accordion.Body>
                            <p>Yes, You Can Easily Upload Shouts & Videos at the Same Time.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
};
