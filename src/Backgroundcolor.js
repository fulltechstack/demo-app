import { useEffect, useState } from "react";

function BackgroundColor() {
  let [backgroundColor, setbackgroundColor] = useState("white");

  /*const changeColor = (setColor) => {
    if (setColor === "Red") {
      setbackgroundColor("Red");
    } else if (setColor === "Green") {
      setbackgroundColor("Green");
    } else if (setColor === "Blue") {
      setbackgroundColor("Blue");
    }
  };*/

  useEffect(() => {
    setbackgroundColor(backgroundColor);
  }, [backgroundColor]);

  return (
    <>
      <p style={{ background: backgroundColor }}>Changing background color</p>
      <button onClick={() => setbackgroundColor("Red")}>Red</button>
      <button onClick={() => setbackgroundColor("Green")}>Green</button>
      <button onClick={() => setbackgroundColor("Blue")}>Blue</button>
      <button onClick={() => setbackgroundColor("Yellow")}>Yellow</button>
      <button onClick={() => setbackgroundColor("Orange")}>Orange</button>
      <button onClick={() => setbackgroundColor("Teal")}>Teal</button>
    </>
  );
}

export default BackgroundColor;
