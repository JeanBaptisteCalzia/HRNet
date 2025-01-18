import "../../components/TableRow/tableRow.scss";

function TableRow({ data }) {
  return (
    <tr>
      {data.map((item) => {
        return <td key={item}>{item}</td>;
      })}
    </tr>
  );
}

export default TableRow;