import "./RegisterPage.scss";

export default function RegisterPage() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">nonMeta</h3>
          <span className="registerDesc">Connect with World on nonMeta...</span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input
              type="text"
              className="registerInput"
              placeholder="Username"
            />
            <input type="text" className="registerInput" placeholder="Email" />
            <input
              type="text"
              className="registerInput"
              placeholder="Password"
            />
            <input
              type="text"
              className="registerInput"
              placeholder="Password Again..."
            />
            <button className="registerButton">Sign Up</button>

            <button className="registerLoginButton">
              Login into Account...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
