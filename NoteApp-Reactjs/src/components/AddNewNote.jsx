import { useState } from "react";

function AddNewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote ={
      title,
      description,
      id:Date.now(),
      completed : false,
      craetedAt :new Date().toISOString(),
    }
    setTitle("");
    setDescription("");
    setNotes(preveNote => [... preveNote , newNote])
  
    
  };
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note title "
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note description "
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
