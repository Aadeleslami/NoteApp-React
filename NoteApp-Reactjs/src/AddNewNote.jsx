

function AddNewNote() {
  return (
   <div className="add-new-note">
     <h2>Add New Note</h2>
     <form className="note-form">
        <input type="text" className="text-field" />
        <input type="text" className="text-field" />
        <button className="btn btn--primary">Add New Note</button>
     </form>
   </div>
  )
}

export default AddNewNote