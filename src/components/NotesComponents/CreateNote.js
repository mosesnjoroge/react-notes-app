import {React,useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';

export default function CreateNote({textHandler, saveHandler, inputText}) {

  const [count, setCount] = useState(0);

  //character counter
  useEffect(() => {
    const characterCount = setInterval(() => {
      setCount(c => c + 1);
    }, 1000)
    return () => clearInterval(characterCount);
    }, []);

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
        <span className="label" >{count}left</span>
        <Button variant="outline-light" onClick = {saveHandler}>Save</Button>
      </div>
    </div>
  );
}
