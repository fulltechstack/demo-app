function Login(props) {
  return (
    <div>
      <div>
        <h2>Hi this is a login page for {props.appName} </h2>
      </div>
      <div>
        <input type="text" placeholder="Username" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button>Login</button>
        <p>
          Don't have an account?{" "}
          <button
            onClick={props.onSignupClick}
          >
            Signup here
          </button>
        </p>
      </div>
    </div>
  );
}
export default Login;
