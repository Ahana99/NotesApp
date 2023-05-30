import { useContext } from "react";
import NotesContext from "../contexts/NotesContext";

export default function useNotesContext() {
  const context = useContext(NotesContext);

  return context;
}
