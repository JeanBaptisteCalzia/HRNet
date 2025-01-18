import "../../components/TableHead/tableHead.scss";

function TableHead({ item }) {
  return <th title={item}>{item}</th>;
}

export default TableHead;
