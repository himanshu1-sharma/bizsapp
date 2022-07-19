import styles from "../../styles/ContactForm.module.css";

export default function ContactForm() {
    return (
        <>
            <div className={styles.contact_form}>
                <form>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={styles.form_group}>
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" placeholder="Enter your name" className="form-control" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className={styles.form_group}>
                                <label for="phone">Phone Number</label>
                                <input type="number" name="phone" id="phone" placeholder="Enter your phone number" className="form-control" />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className={styles.form_group}>
                                <label for="email">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email" className="form-control" />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className={styles.form_group}>
                                <label for="email">Please enter your message below.</label>
                                <textarea placeholder="Type here..." className="form-control" rows="6"></textarea>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className={styles.form_group}>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
};
