import AddNewNote from "./components/AddNewNote";
import "./App.css";
import NoteList from "./components/NoteList";
import {  useReducer, useState } from "react";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
function noteReducer(state, { type, payload }) {
  switch (type) {
    case "add":
      return [...state, payload];

    case "delete":
      return state.filter((s) => s.id !== payload);
    case "complete":
      return state.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    default:
      throw new Error("unknown dispatch");
  }
}
function App() {
  const [sortBy, setSortBy] = useState("latest");

  const [notes, dispatch] = useReducer(noteReducer, []);
  const handleAddNote = (newNote) => {
    // setNotes((prevNotes) => [...prevNotes, newNote]);
    dispatch({ type: "add", payload: newNote });
  };
  const handleDeleteItem = (id) => {
    // const filtersNote = notes.filter((n) => n.id !== id);
    // setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
    dispatch({ type: "delete", payload: id });
  };
  const handleCompletednote = (e) => {
    const noteId = Number(e.target.value);
    // const newNote = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNote);
    // setNotes((prevNote) =>
    //   prevNote.map((note) =>
    //     note.id === noteId ? { ...note, completed: !note.completed } : note
    //   )
    // );
    dispatch({ type: "complete", payload: noteId });
  };

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDeleteNote={handleDeleteItem}
            onCompleted={handleCompletednote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
