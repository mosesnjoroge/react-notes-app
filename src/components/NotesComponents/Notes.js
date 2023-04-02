import {React, useState, useEffect} from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";
import "../css/Note.css";
import { v4 as uuid } from "uuid";

export default function Notes() {

  //states
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  //get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value)
  };

  //crud actions
    //save function
    const saveHandler =() => {
      setNotes((prevState) => [
        ...prevState,
        {
          id:uuid(),
          text: inputText,
        },
      ]);
      //clear the textarea
      setInputText("");
    };

    //delete
    const deleteNote = (id) => {
      const filteredNotes = notes.filter((note) => note.id !== id);
      setNotes(filteredNotes);
    }

  return(
    <div className="notes">
      {notes.map((note) => (
      <Note
        key={note.id}
        id={note.id}
        text={note.text}
        deleteNote={deleteNote}
      />
    ))}

      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />

    </div>
  );
}
