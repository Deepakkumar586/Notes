import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {
    const [noteText,setNoteText] = useState('');
    const charLimit = 200;
    const handleChange = (e)=>{
     setNoteText(e.target.value);   
    }

    const handleSave = ()=>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText(' ');
        }
       
    }

  return (
    <div className='note new'>
    <textarea rows="8" cols="10" placeholder='Type to Add a note' value={noteText} onChange={handleChange}></textarea>

    <div className='note-footer'></div>
    <small>{charLimit - noteText.length} Remaining</small>
    <button className='save' onClick={handleSave}>Save</button>
       
    </div>
  )
}

export default AddNote
