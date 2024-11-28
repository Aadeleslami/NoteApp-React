import AddNewNote from "./components/AddNewNote";
import "./App.css";
import NoteList from "./components/NoteList";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState([]);
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const handleDeletItem = (id) => {
    // const filtersNote = notes.filter((n) => n.id !== id);
    setNotes(prevNotes => prevNotes.filter(n => n.id !== id))
  };
  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteList notes={notes} onDeleteNote={handleDeletItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
