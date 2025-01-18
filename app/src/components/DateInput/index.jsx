import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "../../components/DateInput/dateInput.scss";

function DateInput({ value, onChange }) {
  const [showPopup, setShowPopup] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const datePickerElem = useRef();

  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function togglePopupHandler() {
    setShowPopup((currentShowPopup) => {
      return !currentShowPopup;
    });
  }

  function navigateToPrevMonth() {
    setCurrentMonth((prevIndex) =>
      prevIndex === 0 ? monthName.length - 1 : prevIndex - 1
    );
  }

  function navigateToNextMonth() {
    setCurrentMonth((prevIndex) =>
      prevIndex === monthName.length - 1 ? 0 : prevIndex + 1
    );
  }

  useEffect(() => {
    const handler = (event) => {
      if (!datePickerElem.current) {
        return;
      }
      // if click is outside of the date picker element
      if (!datePickerElem.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    // the key is using the `true` option
    // `true` will enable the `capture` phase of event handling by browser
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div>
      <input
        id="startDate"
        type="text"
        name="startDate"
        value={value}
        onChange={onChange}
        onClick={togglePopupHandler}
      />

      {showPopup && (
        <div className="date-popup" ref={datePickerElem}>
          <div className="year">{currentYear}</div>
          <div className="date-control">
            <button className="btn" type="button" onClick={navigateToPrevMonth}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <span>{monthName[currentMonth]}</span>
            <button className="btn" type="button" onClick={navigateToNextMonth}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
          <div className="date-popup__grid">
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>

            {currentDay}
          </div>
        </div>
      )}
    </div>
  );
}

export default DateInput;
