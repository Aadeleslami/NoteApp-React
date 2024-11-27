import AddNewNote from "./components/AddNewNote";
import "./App.css";
import NoteList from "./components/NoteList";
import { useState } from "react";
function App() {
  const [notes,setNotes] = useState([]);
  return (
    <div className="container">
        <div className="note-header">note header</div>
        <div className="note-app">
            <AddNewNote setNotes ={setNotes}/>
            <div className="note-container">
              <NoteList/>
            </div>
        </div>
    </div>
  )
}

export default App;