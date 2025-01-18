import "../../components/Modal/modal.scss";

function Modal({ handleClose }) {
  return (
    <div
      className="modal"
      onClick={() => {
        // Close modal when outside of modal is clicked
        handleClose();
      }}
    >
      <div
        className="modal__body"
        onClick={(e) => {
          // Do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <h1>Employee Created!</h1>
        <button className="modal__close-btn" onClick={() => handleClose()}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
