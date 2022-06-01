import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Signup.module.css";
import {emailValidation} from "../../utils/helper"
const Signup = () => {
  const [register, setregister] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, seterror] = useState(true);
  const [errorMsg, seterrorMsg] = useState("");

  const onChangeHandler = (e, value) => {
    setregister({ ...register, [e.target.name]: value });
  };


   
  const submitHandler =(e)=>{
    e.preventDefault();
    
      seterror(false)
      seterrorMsg("")
      if(register.firstname.trim()===""){
        seterrorMsg("Please Enter First Name") 
        seterror(true)
        return;
      }else if(register.lastname.trim()===""){
        seterrorMsg("Please Enter Last Name") 
        seterror(true)
        return;
      }else if(register.email.trim()===""){
        seterrorMsg("Please Enter Email") 
        seterror(true)
        return;
    }else if(!emailValidation(register.email)){
        seterrorMsg("Please Enter a valid Email") 
        seterror(true)
        return;
      }
    
    else if(register.password.trim()===""){
        seterrorMsg("Please Enter Password") 
        seterror(true)
        return;
      }
  }
  return (
    <div className={styles.signupMain}>
      <div className={styles.registerForm}>
        <h1 className={styles.signupMainheading}>Create a new Account</h1>
        <h6 className={styles.signupSubheading}>
          Use your email to create a new account
        </h6>
        <Form className={styles.formfieldsContainer}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstname"
              className={styles.inputs}
              onChange={(e) => onChangeHandler(e, e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastname"
              className={styles.inputs}
              onChange={(e) => onChangeHandler(e, e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email Address"
              name="email"
              className={styles.inputs}
              onChange={(e) => onChangeHandler(e, e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              className={styles.inputs}
              onChange={(e) => onChangeHandler(e, e.target.value)}
            />
          </Form.Group>
          <Form.Group className="d-flex" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" />{" "}
            <p className={styles.tc}>
              I have read the <span>Terms and Condition</span>{" "}
            </p>
          </Form.Group>
          {error?<p className={styles.errorMsg}>{errorMsg}</p>:null}
          <Button variant="primary" type="submit" onClick={(e)=>{submitHandler(e)}} className={styles.submitbtn}>
            Sign Up Now
          </Button>
        </Form>
      </div>
    </div>
  )
  }
export default Signup;
