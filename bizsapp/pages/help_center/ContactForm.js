import styles from "../../styles/ContactForm.module.css";
import React, { useState } from 'react';
import Axios from "axios";

export default function ContactForm() {

    const [input, setInput] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    function handleChange(e){
        const {name, value} = e.target;

        setInput(prevInput => {
            return{
                ...prevInput, [name]: value
            }
        })
    }

    function handleClick(e){
        e.preventDefault();
        console.log(input);

        const newInput = {
          name: input.name,
          phone: input.phone,
          email: input.email,
          message: input.message
        }

        Axios.post('http://localhost:3001/getinput', newInput) 
    }

  return (
    <>
      <div className={styles.contact_form}>
        <form>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className={styles.form_group}>
                <label for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="form-control"
                  onChange={handleChange}
                  value={input.value}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className={styles.form_group}>
                <label for="phone">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="form-control"
                  onChange={handleChange}
                  value={input.value}
                />
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className={styles.form_group}>
                <label for="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="form-control"
                  onChange={handleChange}
                  value={input.value}
                />
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className={styles.form_group}>
                <label for="email">Please enter your message below.</label>
                <textarea
                  name="message"
                  placeholder="Type here..."
                  className="form-control"
                  rows="6"
                  onChange={handleChange}
                  value={input.value}
                ></textarea>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className={styles.form_group}>
                <button onClick={handleClick}>Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
