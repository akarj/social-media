import { useRef } from "react";
import "./Login.scss";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const formSubmitHandler = e => {
    e.preventDefault();
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
              type="text"
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
            <button className="loginButton">Log In</button>
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
