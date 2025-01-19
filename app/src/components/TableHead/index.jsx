import "../../components/TableHead/tableHead.scss";

function TableHead({ item, onClick }) {
  return (
    <th title={item}>
      <button onClick={onClick}>{item}</button>
    </th>
  );
}

export default TableHead;
