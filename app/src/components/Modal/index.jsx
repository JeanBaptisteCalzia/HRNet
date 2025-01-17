function Modal({ handleClose }) {
  return (
    <div className="modal">
      <div className="modal__body">
        <h1>Employee Created!</h1>
      </div>
      <button className="modal__close-btn" onClick={() => handleClose()}>
        Close
      </button>
    </div>
  );
}

export default Modal;
