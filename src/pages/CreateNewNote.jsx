import { Link } from "react-router-dom";
import useNotesContext from "../custom_hooks/useNotesContext";
import { useRef } from "react";


function CreateNewNote() {
  const { notes, dispatch } = useNotesContext();
  const noteTitle = useRef("");
  const noteDescription = useRef("");

  function handleAdd() {
    dispatch({
      type: "add",
      title: noteTitle.current.value,
      description: noteDescription.current.value,
    });
  }

  return (
    <div className="create-note-container">
      <input type="text" className="create-note-title" ref={noteTitle} placeholder="Title..." />
      <textarea className="create-note-description" ref={noteDescription} placeholder="Description" />
      <button className="create-note-save" onClick={() => handleAdd()}>
        <Link className="create-note-save-link" to={-1}>Save</Link>
      </button>
      <button className="create-note-cancel">
        <Link className="create-note-cancel-link" to={-1}>Cancel</Link>
      </button>
    </div>
  );
}

export default CreateNewNote;
