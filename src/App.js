
import Note from "./Components/Note"
import CustomHook from "./hookCustom/hookCustom"
import "./App.css"

function App() {
  const {
        setTitle,
        setContent,
        title,
        content,
        flag,
        notes,
        handleSubmit, 
        handleUpdate,
        handleCancel,
        }=CustomHook()

  const rendered= notes.map((note)=><Note key={note.id} note={note} /> )
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