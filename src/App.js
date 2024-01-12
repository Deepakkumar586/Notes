import { useState } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList";

function App() {
  const [notes,setNotes] = useState([
    {
      id:nanoid(),
      text:"This is My First Note",
      date:"15/04/2023"
    },
    {
      id:nanoid(),
      text:"This is My Second Note",
      date:"15/04/2023"
    },
    {
      id:nanoid(),
      text:"This is My Third Note",
      date:"15/04/2023"
    },
    {
      id:nanoid(),
      text:"This is My Fourth Note",
      date:"15/04/2023"
    },
  ]);

  const addNote = (text)=>{
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  }
  return (
   <div className="container">
        <NotesList notes={notes} handleAddNote={addNote}/>
   </div>
  );
}

export default App;
