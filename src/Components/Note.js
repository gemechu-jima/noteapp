import React from 'react'
import {RiDeleteBin5Fill,RiEdit2Fill} from 'react-icons/ri'
import CustomHook from '../hookCustom/hookCustom';

function Note({note}) {
  const {deleteById, handleUpdateNote}=CustomHook()
  return (
    <div className='note'>
        
        <h2>{note.title}</h2>
        <p>{note.content}</p>
       
        <div className="deleteButton-container">
          <RiEdit2Fill className='editbutton' onClick={()=>handleUpdateNote(note)}/>
          <RiDeleteBin5Fill className='deletebutton'
           onClick={()=>deleteById(note.id)}/></div>
        
    </div>
  )
}

export default Note;