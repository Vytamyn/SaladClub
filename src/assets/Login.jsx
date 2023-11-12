import "./Login.css";
import loginImage from "../img/scloginImage.png";
import sclogowhite from "../img/sclogowhite.png";

function Login() {
  return (
    <div className="frame">
      <div className="login-picture">
        <div className="login-logo">
          <img src={sclogowhite} alt="salad club logo" />
        </div>
      </div>
      <div className="login-info">
        <div className="login-access">
          <p className="font-gray" style={{ marginRight: "16px" }}>
            Don't have and account?
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
              <div className="input-field-text">
                <p>Your email address</p>
              </div>
              <input></input>
              <div className="pw-field">
                <p>Your password</p>
                <p className="font-gray">Forgot password?</p>
              </div>
              <input></input>
            </div>
          </div>
          <div className="login-button">
            <button className="button-green">Sign in to admin</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
