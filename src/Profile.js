import { useState } from "react";
import Setting from "./Setting";

function Profile() {
  const username = "Vidhi";
  let [componentToShow, setComponentToShow] = useState("");

  const openComponent = () => {
    setComponentToShow(<Setting />);
  }


  return (
    <>
      <h1>Welcome to your profile, {username}</h1>
      <button onClick={openComponent}>Open settings</button>
      {componentToShow}
    </>
  );
}

export default Profile;
