import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const handleForgotPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Send your also email");
    } else {
      toast("enter your email address and phone");
    }
  };
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  // const handleForgotPassword = (event) => {};

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/home");
  }

  let errorElement;

  if (error) {
    errorElement = <p className="text-danger"> Error {error?.message}</p>;
  } else {
    errorElement = "";
  }

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-2">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>
        New to Photo Graphar?{" "}
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none"
        >
          Please Register
        </Link>{" "}
      </p>
      <p>
        Forget Password?{" "}
        <button
          onClick={handleForgotPassword}
          className="btn btn-link text-primary pe-auto text-decoration-none"
        >
          Reset Password
        </button>{" "}
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
