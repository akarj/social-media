import { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import "./Login.scss";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const formSubmitHandler = e => {
    e.preventDefault();

    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">nonMeta</h3>
          <span className="loginDesc">Connect with World on nonMeta...</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={formSubmitHandler}>
            <input
              type="email"
              className="loginInput"
              placeholder="Email"
              ref={email}
              required
            />
            <input
              type="password"
              className="loginInput"
              placeholder="Password"
              minLength="6"
              required
              ref={password}
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? <CircularProgress color="white" /> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
