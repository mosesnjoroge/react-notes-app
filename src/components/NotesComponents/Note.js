import React from "react";
import DeleteForeverOutlinedIcon  from "@mui/icons-material/DeleteForeverOutlined";

export default function Note({id, text, deleteNote}){

  return(
    <div className = 'note'>
      {/* user input */}
      <div className = 'note--body'>
        {text}
      </div>
      {/* delete icon */}
      <div className='note--footer'>
        <DeleteForeverOutlinedIcon
          className="note--delete"
          onClick={() => deleteNote(id)}
          aria-hidden='true'
        />
      </div>
    </div>
  )
};
