import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";

function HomePage() {
  let myCurrentApplication = 'Adeptia Connect';
  let orgCode = 1;
  if (orgCode == 1) {
    myCurrentApplication = 'Adeptia PC'
  }
  return (
    <>
      <div>
        <h2>Hi this is authentication page for {myCurrentApplication}</h2>
      </div>
      <div
        style={{ width: "50%", position: "absolute", left: "0", top: "20px" }}
      >
        <Login appName={myCurrentApplication} orgCode={orgCode} />
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
