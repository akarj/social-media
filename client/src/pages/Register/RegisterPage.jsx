import { useRef } from "react";
import "./RegisterPage.scss";
import axios from "axios";
import { useNavigate } from "react-router";

export default function RegisterPage() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  const handleClick = async e => {
    e.preventDefault();
    if (passwordAgain.current.value === password.current.value) {
      password.current.setCustomValidity("passwords are not matching!!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
        // res.status(402).sent("p");
      }
    }
  };
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">nonMeta</h3>
          <span className="registerDesc">Connect with World on nonMeta...</span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleClick}>
            <input
              type="text"
              className="registerInput"
              placeholder="Username"
              ref={username}
              required
            />
            <input
              type="email"
              className="registerInput"
              placeholder="Email"
              ref={email}
              required
            />
            <input
              type="password"
              className="registerInput"
              placeholder="Password"
              ref={password}
              minLength="6"
              required
            />
            <input
              type="password"
              className="registerInput"
              placeholder="Password Again..."
              ref={passwordAgain}
              required
            />
            <button className="registerButton" type="submit">
              Sign Up
            </button>

            <button className="registerLoginButton">
              Login into Account...
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
