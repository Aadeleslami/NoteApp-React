import AddNewNote from "./components/AddNewNote";
import "./App.css";
import NoteList from "./components/NoteList";
import { useState } from "react";
import NoteStatus from "./components/NoteStatus";
function App() {
  const [notes, setNotes] = useState([]);
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const handleDeleteItem = (id) => {
    // const filtersNote = notes.filter((n) => n.id !== id);
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };
  const handleCompletednote = (e) => {
    const noteId = Number(e.target.value);
    // const newNote = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNote);
    setNotes(prevNote => prevNote.map((note) =>
      note.id === noteId ? { ...note, completed: !note.completed } : note )
  )
  };
  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes}/>
          <NoteList
            notes={notes}
            onDeleteNote={handleDeleteItem}
            onCompleted={handleCompletednote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
