import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
      localStorage.setItem(
        'react-notes-app-data',
        JSON.stringify(event.target.value)
      );

		}
	};

	const handleSaveClick = (e) => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
      localStorage.setItem(
        'react-notes-app-data',
        JSON.stringify(e.target.value)
      );
     
		}
	};

	return (
		<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;