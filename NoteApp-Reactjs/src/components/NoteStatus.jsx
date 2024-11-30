function NoteStatus({notes}) {
    const allNotes = notes.length;
    const completedNotes = notes.filter(n => n.completed).length;
    const unCopletedNotes = allNotes - completedNotes
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
