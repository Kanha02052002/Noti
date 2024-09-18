import { fakeData as notes } from "../assets/fakeData.js";
import NoteCard from "../components/NoteCard.jsx";

export const NotesPage = () => {
  if (!notes || notes.length === 0) {
    return <div>No notes available.</div>;
  }

  return (
    <div>
      {notes.map((note) => (
        <NoteCard note={note} key={note.$id} />
      ))}
    </div>
  );
};

export default NotesPage;
