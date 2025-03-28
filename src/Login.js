import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let [username, setusername] = useState("vidhi");
  let [password, setpassword] = useState("12345");

  const navigate = useNavigate();

  const isValidUser = () => {
    if (username !== "" && password !== "") {
      console.log("worked", username, password);
      navigate("/Profile");
    }
  };

  return (
    <>
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        placeholder="enter you email"
        onChange={(e) => setusername(e.target.value)}
      />

      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />

      <button onClick={() => isValidUser()}>Login</button>
    </>
  );
}
export default Login;
