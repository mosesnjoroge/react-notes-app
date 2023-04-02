import React from "react";
import Button from 'react-bootstrap/Button';

export default function CreateNote() {

  return(
    <div className="note">
      <textarea
        cols = '10'
        rows='5'
        placeholder="Type..."
        maxLength={100}
      >
      </textarea>
      <div className="note--footer">
        <span className="label">left</span>
        <Button variant="outline-light">Save</Button>
      </div>
    </div>
  );
}
