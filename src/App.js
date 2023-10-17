import {useEffect, useState} from "react"
import Note from "./Components/Note"
import "./App.css"

function App() {
    const [title ,setTitle]=useState('')
    const [content , setContent]=useState('');
    const [flag, setFlag]=useState(null)
    const[notes, setNotes]=useState([
      {
        id:1,
        title:"React",
        content:'React is most popular libarary'
      },
    ])

  const handleSubmit=(ev)=>{
      ev.preventDefault()
      if(!title && !content){
        alert("please fill Title and content ")
        return 0;
      }
    const updateNote=[...notes,{
      id:notes.length+1,
      title:title,
      content:content
    }]
    setNotes(updateNote)
    setTitle("");
    setContent("");
  }
  const deleteById=(id)=>{
    const updateNote=notes.filter((note)=>{
        if(id!==note.id){
          return note;
        }else{
          return 0;
        }
      })
  setNotes(updateNote);
  }
  const handleUpdateNote=(note)=>{
     setFlag(note)
     setTitle(note.title);
     setContent(note.content)
  }
const handleUpdate=(ev)=>{
  ev.preventDefault()
   const updateNote={
    id:flag.id,
    title:title,
    content:content
   }
   const noteUpdates=notes.map((note)=>{
    if(note.id===flag.id){
      return updateNote;
    }else{
      return note;
    }
   })
   setNotes(noteUpdates);
   setTitle('');
   setContent("");
   setFlag(null)
}
  const handleCancel = (ev) => {
    ev.preventDefault()
    setTitle("");
    setContent("");
    setFlag(null);
    console.log(flag);
    
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  const rendered=notes.map((note)=>{
    return (
      <div  key={note.id} >
      <Note 
      note={note}
      deleteById={deleteById}
      editNote={handleUpdateNote}
      flag={flag}
      >
      </Note>
      </div>
  )})
return (

  <div className="App">

   <form onSubmit={(ev)=>(flag?handleUpdate(ev): handleSubmit(ev))}>
      <div>
      <label>
          <span>Title of your Note</span><br/>
          <input 
          type="text"
          value={title}
          onChange={(ev)=>setTitle(ev.target.value)}
          placeholder='Type Title...'
          />
      </label>
      </div>
     <div>
     <label>
          <span>Content</span><br/>
          <textarea 
           rows={5} 
           value={content}
           onChange={(ev)=>setContent(ev.target.value)}
          placeholder='Type contet...'>
          </textarea>
      </label>
     </div>
     {flag
        ? 
        <div>
          <button >save</button>
          <button onClick={ handleCancel }>Cancel</button>
        </div>
      :<button>Add Note</button>
     }
   </form>
   <div className="container" >
    {rendered}
   </div>
  </div>
)
}
export default App;