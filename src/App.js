import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";

function HomePage() {
  return (
    <>
      <div
        style={{ width: "50%", position: "absolute", left: "0", top: "20px" }}
      >
        <Login />
      </div>

      <div
        style={{
          width: "50%",
          position: "absolute",
          right: "0",
          top: "20px",
          textAlign: "left",
        }}
      >
        <Signup />
      </div>
    </>
  );
}

export default HomePage;
