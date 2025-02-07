import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../../components/Modal/modal.scss";

/**
 * Render Modal that is showing if employee has been created
 * @typedef {Object} ModalProps
 * @property { Boolean } isShow Display Modal on true, close modal on false (default)
 * @property { Function } isClose The click event handler (close modal)
 * @property { Boolean } isFading Add fade effect on true
 * @property { Boolean } isSlideIn Add SlideIn effect on true
 * @property { Boolean } isCloseBtn Display Close icon on true
 * @property { Boolean } isCloseBtnInsideModal Display Close btn inside a footer on true
 * @property { String } borderRadius Set Modal border radius
 * @property { Element } children Display the content
 *
 * @param {ModalProps} props
 * @return { JSX.Element }
 */
function Modal({
  isShow,
  isClose,
  isFading,
  isSlideIn,
  isCloseBtn,
  isCloseBtnInsideModal,
  borderRadius,
  children,
}) {
  return isShow ? (
    <div className={`dialog-bg ${isFading ? "fading" : ""}`} onClick={isClose}>
      <div
        className={`dialog-content ${isSlideIn ? "slide-in" : ""}`}
        style={{
          borderRadius: borderRadius + "rem",
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {isCloseBtn ? (
          <button className="dialog-close-btn" onClick={isClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        ) : null}
        {children}
        {isCloseBtnInsideModal ? (
          <div className="dialog-footer">
            <button type="button" className="btn btn-primary" onClick={isClose}>
              Close
            </button>
          </div>
        ) : null}
      </div>
    </div>
  ) : null;
}

Modal.propTypes = {
  isShow: PropTypes.bool,
  isClose: PropTypes.func.isRequired,
  isFading: PropTypes.bool,
  isSlideIn: PropTypes.bool,
  isCloseBtn: PropTypes.bool.isRequired,
  isCloseBtnInsideModal: PropTypes.bool.isRequired,
  borderRadius: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Modal;
