import React from 'react'

function CreateNote({inputText, handleNote}) {
    const handleTitle=(ev)=>{
        handleNote(ev.target.value)   
    }
    const handleSubmit=(ev)=>{
        ev.preventDefault()
      
    }
  return (
    <div>
     <form onSubmit={handleSubmit}>
        <div>
        <label>
            <span>Title of your Note</span><br/>
            <input 
            value={inputText}
            onChange={handleTitle}
            placeholder='Type Title...'
            />
        </label>
        </div>
       <div>
       <label>
            <span>Content</span><br/>
            <textarea 
             rows={5} 
            placeholder='Type contet...'>
            </textarea>
        </label>
       </div>
        
        <button>Add Note</button>
     </form>
    </div>
  )
}

export default CreateNote;