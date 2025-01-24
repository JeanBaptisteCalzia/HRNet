import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../../components/Modal/modal.scss";

function Modal({ isShow, isClose }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (dialogRef.current?.isShow && !isShow) {
      dialogRef.current?.close();
    } else if (!dialogRef.current?.isShow && isShow) {
      dialogRef.current?.showModal();
    }
  }, [isShow]);

  return isShow ? (
    <dialog ref={dialogRef} className="modal">
      <h1>Employee Created!</h1>
      <button className="modal__close-btn" onClick={isClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </dialog>
  ) : null;
}

export default Modal;
