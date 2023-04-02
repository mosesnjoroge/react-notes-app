import React from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";
import "../css/Note.css";

export default function Notes() {

  //get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value)
  };

  return(
    <div className="notes">
      <Note />

      <Note />

      <Note />

      <CreateNote />

    </div>
  );
}
