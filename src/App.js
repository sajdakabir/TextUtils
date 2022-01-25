import React, { useState } from "react";
// import { BrowserRouter , Switch, Route, Link , Routes} from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // document.body.style.backgroundColor='#0E0D5D';
      document.body.style.backgroundColor = "#0C0032";
      showAlert("Dark mode has been enable", "success");
      document.title = "TextUtlis - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="Textutils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/"
            element={<TextFrom
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />}  />
            
          </Routes> */}
          <TextFrom
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
