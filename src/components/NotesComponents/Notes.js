import React from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";
import "../css/Note.css";

export default function Notes() {

  return(
    <div className="notes">
      <Note />

      <Note />

      <Note />

      <CreateNote />

    </div>
  );
}
