import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../../components/Modal/modal.scss";

/**
 * Render Modal that is showing if employee has been created
 * @typedef {Object} ModalProps
 * @property { Boolean } isShow Display Modal on true, close modal on false (default)
 * @property { Function } isClose The click event handler (close modal)
 *
 * @param {ModalProps} props
 * @return { JSX.Element }
 */
function Modal({ isShow, isClose }) {
  const dialogRef = useRef(null);
  // Utilizes React’s useRef to provide a reference to the <dialog> element,
  // enabling direct manipulation of the modal’s DOM node

  useEffect(() => {
    if (isShow) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isShow]);

  return isShow ? (
    <dialog ref={dialogRef} className="dialog">
      <h1 className="fs-3">Employee Created!</h1>
      <button className="dialog__close-btn" onClick={isClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </dialog>
  ) : null;
}

export default Modal;
