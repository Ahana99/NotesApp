import { Link } from "react-router-dom";
import useNotesContext from "../custom_hooks/useNotesContext";
function Notes() {
  const { notes, dispatch } = useNotesContext();

  function clearData(){
    localStorage.clear();
    location.reload();
  }

  return (
    <div>
      {notes.length === 0 ? (
        <div className="no-notes">No saved notes</div>
      ) : (
        <div className="note-main">
          {notes.map((note) => (
            <div className="note-container" key={note.id}>
              <h4 className="note-title">{note.title}</h4>
              <div className="note-description">{note.description}</div>
            </div>
          ))}
        </div>
      )}
      <button className="add-button">
        <Link to="/create-note" className="add-button-link">
          +
        </Link>
      </button>
      <button className="clear-note" onClick={()=>clearData()}>Clear All Notes</button>
    </div>
  );
}

export default Notes;
