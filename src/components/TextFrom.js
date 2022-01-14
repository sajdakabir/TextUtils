import React, { useState } from "react";

export default function TextFrom(props) {
  function handleChange(e) {
    setText(e.target.value);
  }
  function handleUpClick() {
    const newText = text.toUpperCase();
    setText(newText);
  }
  function handleLwClick() {
    const newText = text.toLowerCase();
    setText(newText);
  }
  function handleClClick() {
    const newText = "";
    setText(newText);
  }
  function handleCpClick() {
    const text = document.getElementById("myBox");
    text.select();

    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleCapClick = () => {
    const newText = text
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        // style={{ color: props.mode === "dark" ? "white" : "dark" }}
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
           
            // style={{
            //   backgroundColour: props.mode === "dark" ? "#0C0032" : "white",
            //   color: props.mode === "dark" ? "white" : "black",
            // }}
            style={{
              backgroundColor: props.mode === "dark" ? "#0C0032" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-dark my-3" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-dark my-3 mx-2" onClick={handleLwClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-dark my-3 mx-2" onClick={handleCapClick}>
            Convert to Capitalize Case
          </button>
          <button className="btn btn-dark my-3 mx-2" onClick={handleCpClick}>
            Copy text
          </button>
          <button className="btn btn-dark my-3 mx-2" onClick={handleExtraSpace}>
            Remove Extra Space
          </button>
          <button className="btn btn-dark my-3 mx-2" onClick={handleClClick}>
            Clear text
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summery</h1>
        <p>
          {text.split(" ").length - 1} Words and {text.length} Characters
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "write somthing to see preview"}</p>
      </div>
    </>
  );
}
