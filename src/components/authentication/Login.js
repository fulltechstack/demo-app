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
      </div>
    </div>
  );
}
export default Login;
