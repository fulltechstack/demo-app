import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jsonfile from "../service-data/UserCredentials.json";
import ToastNotification from "./ToastNotification";
import authContext from "../context/AuthContext";
import { useContext } from "react";

function Login() {
  let [username, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [notification, setNotification] = useState();

  let ctx = useContext(authContext);
  const navigateTo = useNavigate();

  const setFirstName = jsonfile.userdata.find(
    (user) => user.username === username
  );

  const validateLogin = () => {
    return jsonfile.userdata.find(
      (user) => user.username === username && user.password === password
    );
  };

  const loginUser = (e) => {
    e.preventDefault();
    console.log("Check login");
    if (validateLogin()) {
      ctx.setUser({
        firstname: setFirstName.firstName,
        isLoggedIn: true,
      });
      navigateTo("/");
    } else {
      ctx.setUser({
        isLoggedIn: false,
      });
      setNotification({
        type: "error",
        message: "Login Unsuccessful",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Login
        </h2>

        <form className="flex flex-col gap-4" onSubmit={(e) => loginUser(e)}>
          {/* Email input */}
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          {/* Password input */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
      <ToastNotification notification={notification} />
    </div>
  );
}

export default Login;
