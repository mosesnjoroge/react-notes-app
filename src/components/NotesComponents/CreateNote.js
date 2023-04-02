import React from "react";
import Button from 'react-bootstrap/Button';

export default function CreateNote({textHandler, saveHandler, inputText}) {

  return(
    <div className="note">
      <textarea
        cols = '10'
        rows='5'
        value = {inputText}
        placeholder="Type..."
        onChange = {textHandler}
        maxLength={100}
      >
      </textarea>
      <div className="note--footer">
        <span className="label">left</span>
        <Button variant="outline-light" onClick = {saveHandler}>Save</Button>
      </div>
    </div>
  );
}
