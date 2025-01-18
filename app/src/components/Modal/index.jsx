import "../../components/Modal/modal.scss";

function Modal({ handleClose }) {
  return (
    <div className="modal">
      <div className="modal__body">
        <h1>Employee Created!</h1>
        <button className="modal__close-btn" onClick={() => handleClose()}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
