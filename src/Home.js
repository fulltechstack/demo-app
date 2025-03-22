import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import { useState } from "react";

function HomePage() {
  const [showSignup, setShowSignup] = useState(false);

  const handleShowSignup = () => {
    setShowSignup(true);
  };

  let myCurrentApplication = 'Adeptia Connect';
  let orgCode = 1;
  if (orgCode === 1) {
    myCurrentApplication = 'Adeptia PC'
  }

  let component;

  if (!showSignup) {
    component = <Login appName={myCurrentApplication} orgCode={orgCode} onSignupClick={handleShowSignup} />;
  }
  else {
    component = <Signup />;
  }
  return (
    <>
      <div>
        <h2>Hi this is authentication page for {myCurrentApplication}</h2>
      </div>

      {component}

    </>
  );
}

export default HomePage;
