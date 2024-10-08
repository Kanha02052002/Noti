import Trash from "../icons/Trash";

const NoteCard = ({ note }) => {
  let position = JSON.parse(note.position);
  const colors = JSON.parse(note.colors);
  const body = JSON.parse(note.body);
  
  return (
    <>
      <div className="card" style={{ backgroundColor: colors.colorBody,left: `${position.x}px`,
                top: `${position.y}px`, }}>
        {body}
      </div>
      <div
        className="card-header"
        style={{ backgroundColor: colors.colorHeader }}
      ></div>
      <Trash/>
      <div className="card-body">
        <textarea
          style={{ color: colors.colorText }}
          defaultValue={body}
        ></textarea>
      </div>
    </>
  );
};

export default NoteCard;
