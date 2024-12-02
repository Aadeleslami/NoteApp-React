import Message from "./Message";

function NoteStatus({ notes }) {
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const unCopletedNotes = allNotes - completedNotes;
  if (!allNotes)
    return (
      <Message>
        <h1>No Notes has already been added.</h1>
      </Message>
    );

  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{unCopletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
