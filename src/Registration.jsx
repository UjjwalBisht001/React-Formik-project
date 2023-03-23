import { useFormik } from "formik";
import styled from "styled-components";
import { useState } from "react";

import "./App.css";
import { signUpSchema } from "./schemas";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      validationSchema: signUpSchema,
      initialValues: initialValues,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  // const []
  return (
    <Wrapper>
      <div className="container">
        <div className="modal">
          <div className="modal-container">
            <form onSubmit={handleSubmit}>
              <div className="input-block">
                <label htmlFor="name" className="input-label">
                  Name
                </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className="form-error">{errors.name}</p>
                ) : null}
              </div>
              <div className="input-block">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email "
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="form-error">{errors.email}</p>
                ) : null}
              </div>
              <div className="input-block">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="form-error">{errors.password}</p>
                ) : null}
              </div>
              <div className="input-block">
                <label htmlFor="confirm_password" className="input-label">
                  Password
                </label>
                <input
                  className="input"
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <p className="form-error">{errors.confirm_password}</p>
                ) : null}
              </div>

              <button className="input-button" type="submit">
                Registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    border:transparent;

    transition: 0.3s;

    .input-label {
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.7px;
      color: #8c7569;
      transition: 0.3s;
    }
  }
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    max-width: 700px;
    width: 500px;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    transition-duration: 0.3s;
    background: #fff;
  }
  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
    margin-bottom: 1rem;
  }
  .input-button:hover {
    background: #55311c;
  }
  .form-error {
    font-size: 1rem;
    color: #b22b27;
  }
  .input {
    height: 2rem;
    font-size: 16px;
  }
`;

export default Registration;
