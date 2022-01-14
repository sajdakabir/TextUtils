import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      // document.body.style.backgroundColor='#0E0D5D';
      document.body.style.backgroundColor = "#0C0032";
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        title="Textutils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextFrom heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
