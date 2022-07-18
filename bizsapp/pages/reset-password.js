import React, { useState } from "react";
import styles from "../styles/ResetPassword.module.css";
import { ObjectId } from "mongodb";
import Link from 'next/link';
import { connectToDatabase } from "../lib/mongodb";



export default function resetPassword({ properties }) {
  return (
    <>
      {properties &&
        properties.map((properties) => {
          const [input, setInput] = useState({
            password: "",
            confirmPassword: "",
          });

          const [error, setError] = useState({
            password: "",
            confirmPassword: "",
          });

          const onInputChange = (e) => {
            const { name, value } = e.target;
            setInput((prev) => ({
              ...prev,
              [name]: value,
            }));
            validateInput(e);
          };

          const validateInput = (e) => {
            let { name, value } = e.target;
            setError((prev) => {
              const stateObj = { ...prev, [name]: "" };

              switch (name) {
                case "password":
                  if (!value) {
                    stateObj[name] = "Please enter Password.";
                  } else if (
                    input.confirmPassword &&
                    value !== input.confirmPassword
                  ) {
                    stateObj["confirmPassword"] =
                      "Password and Confirm Password does not match.";
                  } else {
                    stateObj["confirmPassword"] = input.confirmPassword
                      ? ""
                      : error.confirmPassword;
                  }
                  break;

                case "confirmPassword":
                  if (!value) {
                    stateObj[name] = "Please enter Confirm Password.";
                  } else if (input.password && value !== input.password) {
                    stateObj[name] =
                      "Password and Confirm Password does not match.";
                  }
                  break;

                default:
                  break;
              }

              return stateObj;
            });
          };

          return (
            <>
            
              <section className="container-fluid p-0">
                <div className={styles.header_bg}>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className={styles.logo}>
                          <Link href="/">
                          <img
                            src="./img/logo/logo-white.png"
                            alt="BizsApp_Logo"
                          />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            {
                properties.name ? 

                <section className="container-fluid p-0">
                <div className={styles.resetPassword_bg}>
                  <div className="container">
                    <div className={styles.resetPassword_box}>
                        <h1>Hii {properties.name}</h1>
                      <div className={styles.resetPassword_form}>
                        <h2>Set new password</h2>
                        <form>
                          <div className={styles.formGroup}>
                            <p>New Password *</p>
                            <input
                              type="text"
                              name="password"
                              className="form-control"
                              minLength="6"
                              maxLength="20"
                              value={input.password.trim()}
                              onChange={onInputChange}
                              onBlur={validateInput}
                            />
                            {error.password && <span>{error.password}</span>}
                          </div>
                          <div className={styles.formGroup}>
                            <p>Repeat New Password *</p>
                            <input
                              type="password"
                              name="confirmPassword"
                              className="form-control"
                              value={input.confirmPassword.trim()}
                              onChange={onInputChange}
                              onBlur={validateInput}
                            />
                            {error.confirmPassword && (
                              <span>{error.confirmPassword}</span>
                            )}
                          </div>
                          <div className={styles.formGroup}>
                            <button>Update Password</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section> 

              : 
              console.log("dsd")

            }
              
            </>
          );
        })}
    </>
  );
}

export async function getServerSideProps(context) {
const id = context.query.id

  const { db } = await connectToDatabase();


  const data = await db
    .collection("users")
    .find({_id: ObjectId(id) })
    .toArray();

  const properties = JSON.parse(JSON.stringify(data));
  console.log(data);

  return {
    props: { properties: properties },
  };
}
