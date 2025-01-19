import { useState, useMemo } from "react";
import TableRow from "../../components/TableRow";
import TableHead from "../../components/TableHead";
import "../../components/Table/table.scss";

function Table({ theadData, tbodyData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectEntries, setSelectEntries] = useState(10);
  const tableEntries = [10, 25, 50, 100];

  // Filter data based on search term
  const filteredData = useMemo(() => {
    return tbodyData.filter(
      (employees) =>
        employees.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employees.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employees.startDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employees.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employees.dateBirth.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employees.street.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employees.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employees.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employees.zipCode.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [tbodyData, searchTerm]);

  return (
    <>
      <div className="table-top">
        <div className="table-length">
          <label htmlFor="table-length">
            Show
            <select
              id="table-length"
              name="table-length"
              value={selectEntries || ""}
              onChange={({ target: { value } }) => setSelectEntries(value)}
            >
              {tableEntries.map((data, index) => (
                <option key={index} value={data}>
                  {data}
                </option>
              ))}
            </select>
            entries
          </label>
        </div>
        <div className="table-filter">
          <label>
            Search:
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            {theadData.map((h) => {
              return <TableHead key={h} item={h} />;
            })}
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => {
              return <TableRow key={index} data={item} />;
            })
          ) : (
            <tr>
              <td className="no-result" colSpan="9">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="table-bottom">
        <div className="table-info">
          <p>
            Showing 1 to {selectEntries} of {tbodyData.length} entries
          </p>
        </div>
        <div className="table-paginate">
          <a className="table-paginate__button previous">Previous</a>
          <span>
            <a className="table-paginate__button current">1</a>
          </span>
          <a className="table-paginate__button next">Next</a>
        </div>
      </div>
    </>
  );
}

export default Table;
