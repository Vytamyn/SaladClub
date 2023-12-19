import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import sclogowhite from "../img/sclogowhite.png";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);

    validationSchema
      .validate(values)
      .then(() => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          navigate("/dashboard");
        }, 400);
      })
      .catch((errors) => {
        console.error(errors);
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <div className="frame">
          <div className="login-picture">
            <div className="login-logo">
              <img src={sclogowhite} alt="salad club logo" />
            </div>
          </div>
          <div className="login-info">
            <div className="login-access">
              <p className="font-gray" style={{ marginRight: "16px" }}>
                Don't have an account?
              </p>
              <button className="button-black">Request access</button>
            </div>
            <div className="sign-in-container">
              <div className="login-text">
                <h1>Sign in to SaladClub Admin</h1>
                <p className="font-gray">
                  Please enter your details below to sign in
                </p>
                <div className="email-password">
                  <p className="input-field-text">Your email address</p>
                  <Field
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className={`${
                      errors.email && touched.email ? "error-field" : ""
                    }`}
                  />

                  <div className="pw-field">
                    <p className="input-field-text">Your password</p>
                    <p className="font-gray input-field-text">
                      Forgot password?
                    </p>
                  </div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`${
                      errors.password && touched.password ? "error-field" : ""
                    }`}
                  />
                </div>
              </div>
              <div className="login-button">
                <Form>
                  <button type="submit" className="button-green">
                    Sign in to admin
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
