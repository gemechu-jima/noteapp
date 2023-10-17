import React from 'react'
import {RiDeleteBin5Fill,RiEdit2Fill} from 'react-icons/ri'

function Note({note, deleteById, editNote}) {
  return (
    <div className='note'>
        
        <h2>{note.title}</h2>
        <p>{note.content}</p>
       
        <div className="deleteButton-container">
          <RiEdit2Fill className='editbutton' onClick={()=>editNote(note)}/>
          <RiDeleteBin5Fill className='deletebutton'
           onClick={()=>deleteById(note.id)}/></div>
        
    </div>
  )
}

export default Note;