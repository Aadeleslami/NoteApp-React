import { IconTrash } from "@tabler/icons-react";
import { useNote, useNoteDispatch } from "../context/NoteContext";
function NoteList({ sortBy }) {
  const notes = useNote();
  let sortedNote = notes;
  if (sortBy === "earliest")
    sortedNote = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sortBy === "latest")
    sortedNote = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

  if (sortBy === "completed")
    sortedNote = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
  return (
    <div className="note-list">
      {sortedNote.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
function NoteItem({ note }) {
  const dispatch = useNoteDispatch();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button
            onClick={() => dispatch({ type: "delete", payload: note.id })}
          >
            <IconTrash className="icon" stroke={2} />
          </button>
          <input
            type="checkbox"
            id={note.id}
            name={note.id}
            value={note.id}
            checked={note.Completed}
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "complete", payload: noteId });
            }}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
