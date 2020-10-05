import React from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { isFormValid } from "../../helpers/isFormValid.js";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";
export const RegisterScreen = () => {
  const [
    { name, email, password, confirmPassword },
    handleInputChange,
  ] = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const { errorMsg } = useSelector((state) => state.ui);
  const handleRegister = (e) => {
    e.preventDefault();
    if (
      isFormValid(
        { name, email, password, confirmPassword },
        dispatch,
        errorMsg
      )
    ) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };
  return (
    <>
      {" "}
      <h3 className="auth__title">Register</h3>
      {!!errorMsg && (
        <p className="auth__invalid-form-msg w-full text-center font-bold mb-4">
          {" "}
          {errorMsg}
        </p>
      )}
      <form
        onSubmit={handleRegister}
        autoComplete="off"
        className="flex flex-col w-full items-start">
        <input
          className="auth__input"
          type="name"
          value={name}
          name="name"
          onChange={handleInputChange}
          placeholder="Your name"
        />
        <input
          className="auth__input"
          value={email}
          type="email"
          name="email"
          onChange={handleInputChange}
          placeholder="email@example.com"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          placeholder="Enter your password..."
          className="auth__input"
        />
        <input
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleInputChange}
          placeholder="Confirm your password..."
          className="auth__input"
        />
        <button className="btn mb-6 btn-primary btn-block" type="submit">
          Register
        </button>
        <Link className="link" to="/auth/login">
          Already register?
        </Link>
      </form>
    </>
  );
};
