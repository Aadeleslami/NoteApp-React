import { createContext, useContext, useReducer } from "react";

const NoteContext = createContext(null);
const NoteDispatchContext = createContext(null);

function noteReducer(state, { type, payload }) {
  switch (type) {
    case "add":
      return [...state, payload];

    case "delete":
      return state.filter((s) => s.id !== payload);
    case "complete":
      return state.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    default:
      throw new Error("unknown dispatch");
  }
}

export default function NoteProvider({ children }) {
  const [notes, dispatch] = useReducer(noteReducer, []);
  return (
    <NoteDispatchContext.Provider value={dispatch}>
      <NoteContext.Provider value={notes}>{children}</NoteContext.Provider>
    </NoteDispatchContext.Provider>
  );
}

export function useNote() {
  return useContext(NoteContext);
}
export function useNoteDispatch() {
  return useContext(NoteDispatchContext);
}
