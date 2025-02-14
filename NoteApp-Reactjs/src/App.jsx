import AddNewNote from "./components/AddNewNote";
import "./App.css";
import NoteList from "./components/NoteList";
import { useState } from "react";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import NoteProvider from "./context/NoteContext";

function App() {
  const [sortBy, setSortBy] = useState("latest");

  return (
    <NoteProvider>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NoteProvider>
  );
}

export default App;
