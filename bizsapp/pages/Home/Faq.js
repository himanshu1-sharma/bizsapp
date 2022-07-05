
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';


export default function Faq() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title text-center">
                            <h2>Frequently Ask Questions</h2>
                            <p>BizsApp Team Gives Valued and Respect our Users for Their Query. here <br />we are try to give most asked question Answer </p>
                        </div>
                    </div>
                </div>

                <div className="faqs_bg mb-5">
                    <div className="faqs">
                        <div className="accordion" id="accordionExample">
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                How do I add or change profile picture on BizsApp?
                                                <div className="plus">
                                                    <div className="top"></div>
                                                    <div className="bottom"></div>
                                                </div>
                                            </button>

                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>To add or change your profile picture:</p>
                                                <p>BizsApp for Android and iPhone</p>
                                                <ol>
                                                    <li>Tap <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>  or your profile picture in the bottom right to go to your profile.</li>
                                                    <li>Tap <b>Edit profile</b>.</li>
                                                    <li>Tap <b>Change Profile Photo</b>, then select where you'd like to import your picture from.</li>
                                                    <li>Tap <b>Done</b> (iPhone) or <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>  (Android) after making your changes.</li>
                                                </ol>
                                                <p>You can take a new photo or add a photo from your phone's photo library. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How to use BizsShouts
                                                <div className="plus">
                                                    <div className="top"></div>
                                                    <div className="bottom"></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>This Is Very Simple but very helpful feature for any business person, at BizsShouts you easily shoot video or used video of phone library and after that complete uploading procedure after this your shouts are live and now your shouts seen by our audience. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                What About end-to-end encrypted backup In BizsApp?
                                                <div className="plus">
                                                    <div className="top"></div>
                                                    <div className="bottom"></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>End-to-end encryption ensures only you and the person you're communicating with can read or listen to what is sent, and nobody in between, not even BizsApp. With end-to-end encrypted backup, you can also add that same layer of protection to your backup on iCloud or Google Drive.</p>
                                                <h4>Password protection</h4>
                                                <p>When you create an end-to-end encrypted backup, your messages and media are stored in the cloud and secured by a password. Your password can be changed at any time as long as you have access to your previous password or key.</p>
                                                <p><b>Note:</b> You won’t be able to restore your backup if you lose your BizsApp chats and forget your password. BizsApp can’t reset your password or restore your backup for you.</p>
                                                <h4>Turn off end-to-end encrypted backup</h4>
                                                <p>You can choose to turn off end-to-end encrypted backup by using your password. If you turn off end-to-end encrypted backup, your messages and media will no longer back up to the cloud unless you set them up to do so.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingfour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                What About last seen and online
                                                <div className="plus">
                                                    <div className="top"></div>
                                                    <div className="bottom"></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Last seen and online tell you the last time your contacts used BizsApp, or if they're online.</p>
                                                <p>If a contact is online, they have BizsApp open in the foreground on their device and are connected to the Internet. However, it doesn't necessarily mean the contact has read your message.</p>
                                                <p>Last seen refers to the last time the contact used BizsApp. Through our privacy settings, you have the option to control who can see your last seen. You may not be able to see someone’s online status unless they have you saved as a contact or have previously messaged you. Please note you can’t control who can see your online in settings.</p>
                                                <p>There are a few reasons why you might not be able to see a contact's last seen:</p>
                                                <ul>
                                                    <li>They might have set their privacy settings to hide this information.</li>
                                                    <li>You might have set your privacy settings to not share your last seen. If you don't share your last seen, you can't see other contacts' last seen.</li>
                                                    <li>You might have been blocked.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingfive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                                About contact upload
                                                <div className="plus">
                                                    <div className="top"></div>
                                                    <div className="bottom"></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Contact upload is an optional feature that allows us to check which of your contacts in your device's address book are also BizsApp users. It also means we can update your BizsApp contact list when your contacts who aren't using BizsApp yet sign up later. We care about your privacy and we don't share your contact list with any Platforms, even when they provide us with services.</p>
                                                <p>When you use contact upload and grant BizsApp access to your device address book, BizsApp will access and upload the phone numbers in your address book typically daily, but this depends on various factors including how often a user uses BizsApp, including those of BizsApp users and your other contacts. We dont collect any of the other information that could appear in your device address book including names, email addresses, etc.</p>
                                                <p>If any of your contacts aren’t yet using BizsApp, we protect their privacy by managing the phone number in a way that is designed to prevent those contacts from being identified by BizsApp. We do this by creating a cryptographic hash value of their phone number, and then delete the number. Each cryptographic hash value is stored on BizsApp servers, linked to the BizsApp users who uploaded the corresponding phone numbers before they </p>
                                                <p>were hashed so that we can more efficiently connect you with these contacts when they join BizsApp.</p>
                                                <p>Separately, we also create a cryptographic hash representation of the phone numbers in your device address book which we use to detect and combat misuse of contact upload. For example, we assess the hashes to determine whether there have been unusual changes in the address book. This does not involve tracking or comparing individual phone numbers.</p>
                                                <p>You can control the contact upload feature from your device-based settings. If you choose not to use Contact Upload you can still communicate with people who have BizsApp but certain functionality will be limited.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingsix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                                How to update BizsApp
                                                <div className="plus">
                                                    <div className="top"></div>
                                                    <div className="bottom"></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>You can easily update BizsApp from your devices app store. Please note, if you received a message that isn't supported by your version of BizsApp, you'll need to update the app. We encourage you to always use the latest version of BizsApp. Latest versions contain the newest features and bug fixes.</p>
                                                <h4>Android</h4>
                                                <p>Find BizsApp in the <Link href="#">Google Play Store</Link>, then tap <b>Update</b>.</p>
                                                <h4>iPhone</h4>
                                                <p>Find BizsApp in the <Link href="#">Apple App Store</Link>, then tap <b>UPDATE</b>.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
