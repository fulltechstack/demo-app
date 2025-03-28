import { useState } from "react";

function App() {
  let [name, setName] = useState("Vidhi");

  const changeName = (whichButtonIsClicked) => {
    if (whichButtonIsClicked === "Akash") {
      setName("Akash");
    } else if (whichButtonIsClicked === "Vidhi") {
      setName("Vidhi");
    }
  };

  return (
    <>
      <p>Hello {name}</p>
      <button onClick={() => changeName("Akash")}>Change Name</button>
      <button onClick={() => changeName("Vidhi")}>Reset</button>
    </>
  );
}

export default App;
