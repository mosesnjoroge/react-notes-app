import React from "react";
import DeleteForeverOutlinedIcon  from "@mui/icons-material/DeleteForeverOutlined";

export default function Note(){

  return(
    <div className = 'note'>
      {/* user input */}
      <div className = 'note--body'>
      </div>
      {/* delete icon */}
      <div className='note--footer'>
        <DeleteForeverOutlinedIcon
          className="note--delete"
          aria-hidden='true'
        />
      </div>
    </div>
  )
};
