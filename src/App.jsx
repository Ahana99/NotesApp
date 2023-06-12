import { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { v4 as uuidV4 } from "uuid";

import Notes from "./pages/Notes";
import CreateNewNote from "./pages/CreateNewNote";

import NotesContext from "./contexts/NotesContext";

import { getDatabase, set, ref } from "firebase/database";
import { app } from "./Firebase";

/*-------------------------------------------------------------------------------------------------------------------*/

const initialNotes = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

function notesReducer(state, action) {
  console.log(localStorage.getItem("notes"));
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: uuidV4(), title: action.title, description: action.description },
      ];
    default:
      return state;
  }
}

const db = getDatabase(app);

function App() {
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    set(ref(db, "notes"), {
      notes: notes
    });
  }, [notes]);

  return (
    <div className="main">
      <h1 className="main--header">My Notes</h1>
      <NotesContext.Provider value={{ notes, dispatch }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create-note" element={<CreateNewNote />} />
          </Routes>
        </BrowserRouter>
      </NotesContext.Provider>
    </div>
  );
}

export default App;
