import TableRow from "../../components/TableRow";
import TableHead from "../../components/TableHead";
import "../../components/Table/table.scss";

function Table({ theadData, tbodyData }) {
  return (
    <>
      <div className="table-top">
        <div className="table-length">
          <label htmlFor="table-length">
            Show
            <select id="table-length" name="table-length">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            entries
          </label>
        </div>
        <div className="table-filter">
          <label>
            Search:
            <input type="search" />
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
          {tbodyData.map((item) => {
            return <TableRow key={item.id} data={item.items} />;
          })}
        </tbody>
      </table>
      <div className="table-bottom">
        <div className="table-info">
          <p>Showing 1 to 10 of {tbodyData.length} entries</p>
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
