import "../../components/TableRow/tableRow.scss";

function TableRow({ data }) {
  return (
    <tr>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.startDate}</td>
      <td>{data.department}</td>
      <td>{data.dateBirth}</td>
      <td>{data.street}</td>
      <td>{data.city}</td>
      <td>{data.state}</td>
      <td>{data.zipCode}</td>
    </tr>
  );
}

export default TableRow;
