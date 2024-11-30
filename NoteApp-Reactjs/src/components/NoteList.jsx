import { IconTrash } from "@tabler/icons-react";
function NoteList({ notes, onDeleteNote, onCompleted }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDeleteNote={onDeleteNote}
          onCompleted={onCompleted}
        />
      ))}
    </div>
  );
}

export default NoteList;
function NoteItem({ note, onDeleteNote, onCompleted }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={`note-item ${note.completed? "completed":""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDeleteNote(note.id)}>
            <IconTrash className="icon" stroke={2} />
          </button>
          <input
            type="checkbox"
            id={note.id}
            name={note.id}
            value={note.id}
            checked={note.Completed}
            onChange={onCompleted}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.craetedAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
