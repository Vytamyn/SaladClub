import "./Login.css";

function Login() {
  return (
    <div className="frame">
      <div className="login-picture">Picture</div>
      <div className="login-info">
        <div className="login-access">
          <p>Don't have and account?</p>
          <button>Request access</button>
        </div>
        <div>
          <h1>Sign in to SaladClub Admin</h1>
          <p>Please enter your details below to sign in</p>
        </div>
        <div>
          <p>Your email address</p>
          <input></input>
          <p>Your password</p>
          <input></input>
        </div>
        <div>
          <button>Sign in to admin</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
