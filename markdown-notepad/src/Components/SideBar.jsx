/* eslint-disable react/prop-types */
export default function Sidebar(props) {
  const noteElements = props.notes.map((note) => (
    <li
      key={note.id}
      className={`title ${
        note.id === props.currentNote.id ? "selected-note" : ""
      }`}
      onClick={() => props.setCurrentNoteId(note.id)}
    >
      <span className="text-snippet">#{note.body.split(/[\n#]/)[1]}</span>
      <button
        className="delete-btn"
        onClick={(e) => props.deleteNote(e, note.id)}
      >
        <i className="gg-trash trash-icon"></i>
      </button>
    </li>
  ));
  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
