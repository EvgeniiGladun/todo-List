import "./ModalWrapper.css";

function ModalWrapper(props) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button className="modal-button__close" onClick={props.handlePopup}>
          X
        </button>
        <h3 className="modal-title">{props.title}</h3>
        <input
          onChange={(evt) => props.setEditToDo(evt.target.value)}
          value={props.editToDo}
          className="modal-input"
          type="text"
          placeholder={props.placeholderText}
        />
        <button
          disabled={props.editToDo ? false : true}
          onClick={() => props.editTask()}
          className="modal-button"
        >
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWrapper;
