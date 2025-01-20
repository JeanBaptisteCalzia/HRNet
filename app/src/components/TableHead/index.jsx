import "../../components/TableHead/tableHead.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

function TableHead({ item, onClick, toggle }) {
  return (
    <th title={item}>
      <button onClick={onClick}>
        {item}
        {toggle ? (
          <FontAwesomeIcon icon={faSortUp} />
        ) : (
          <FontAwesomeIcon icon={faSortDown} />
        )}
      </button>
    </th>
  );
}

export default TableHead;
