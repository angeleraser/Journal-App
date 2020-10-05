import React from "react";
import { Link } from "react-router-dom";
import { googleIcon } from "../../icons/svg";
import useForm from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
export const LoginScreen = () => {
  const [{ email, password }, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { loading } = useSelector(({ ui }) => ui);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };
  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form
        onSubmit={handleLogin}
        autoComplete="off"
        className="flex flex-col w-full items-start">
        <input
          className="auth__input"
          type="email"
          name="email"
          placeholder="email@example.com"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password..."
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <button
          disabled={loading}
          className="btn btn-primary btn-block"
          type="submit">
          {!loading ? "Login" : "Loading..."}
        </button>
        <div className="auth__social-networks">
          <div className="networks-buttons w-full mb-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="google-btn-wrapper w-full flex items-center">
              <div className="google-icon mr-10"> {googleIcon}</div>
              Sign in with Google
            </button>
          </div>
        </div>
        <Link className="link font-bold w-full text-center" to="/auth/register">
          Create new account
        </Link>
      </form>
    </>
  );
};
