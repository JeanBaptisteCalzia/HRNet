import { useState, useMemo } from "react";
import TableRow from "../../components/TableRow";
import TableHead from "../../components/TableHead";
import Pagination from "../../components/Pagination";
import "../../components/Table/table.scss";

function Table({ theadData, tbodyData }) {
  let [data, setData] = useState(tbodyData);
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const tableEntries = [10, 25, 50, 100];

  // Filter data based on search term
  data = useMemo(() => {
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

  // Pagination
  const startPoint = (currentPage - 1) * rowsPerPage;
  const endPoint = currentPage * rowsPerPage;
  const nbPages = Math.ceil(data.length / rowsPerPage);

  // Sorting
  const [toggle, setToggle] = useState(false);
  const handleHeaderClick = () => {
    const newToggle = !toggle;
    setToggle(newToggle);
    setData(data.sort().reverse());
  };

  return (
    <>
      <div className="table-top">
        <div className="table-length">
          <label htmlFor="table-length">
            Show
            <select
              name="table-lenght"
              id="table-lenght"
              onChange={(e) => setRowPerPage(e.target.value)}
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
              return (
                <TableHead
                  key={h}
                  item={h}
                  onClick={handleHeaderClick}
                  toggle={toggle}
                />
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data
              .sort()
              .slice(startPoint, endPoint)
              .map((item, index) => {
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
            Showing 1 to {rowsPerPage} of {tbodyData.length} entries
          </p>
        </div>
        <div className="table-paginate">
          <Pagination
            nbPages={nbPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}

export default Table;
