import { createContext, useState,useEffect } from "react";

const NoteContext=createContext();

export function NoteProvider({children}){
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
        title,
        content
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
    const valueShare={
        setTitle,
        setContent,
        title,
        content,
        flag,
        notes,
        handleSubmit,
        deleteById,
        handleUpdateNote,
        handleUpdate,
        handleCancel,
    }

    return (<NoteContext.Provider value={valueShare}>
         {children}
       </NoteContext.Provider>)
}

export default NoteContext;
