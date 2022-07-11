import Navigation from "./includes/Navigation";
import BeforeFooter from "./includes/BeforeFooter";
import Footer from "./includes/Footer";
import styles from "../styles/Contact.module.css";
import { useState } from "react";

export default function contact() {
  const [user, setUser] = useState({ name: "", email: "", number: "" });
 
let name, value; 
  const handleInputs = (e) => {

    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value} )
  }

  const submitForm = (e) => {
      e.preventDefault();

      const submitData = {user}
      console.log(submitData)
      
  } 

  return (
    <>
      <Navigation />
      <div className={styles.contact_form}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <form>
                <div className={styles.form_group}>
                  <div className="mb-3">
                    <label for="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      value={user.name}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className={styles.form_group}>
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      value={user.email}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className={styles.form_group}>
                  <div className="mb-3">
                    <label for="number" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="number"
                      className="form-control"
                      id="number"
                      placeholder="Phone Number"
                      value={user.number}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className={styles.form_group}>
                  <div className="mb-3">
                    <button className="btn btn-dark" onClick={submitForm}>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
}



 