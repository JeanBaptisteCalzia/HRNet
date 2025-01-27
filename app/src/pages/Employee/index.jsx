import { useState, useMemo, useEffect } from "react";
// import Table from "../../components/Table/"; // Custom component
import TopBar from "../../components/TopBar/";
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import { getLocalStorageData as getLocalStorageDataAction } from "../../redux/dataSlice";
// Custom component
// const theadData = [
//   "First Name",
//   "Last Name",
//   "Start Date",
//   "Department",
//   "Date of Birth",
//   "Street",
//   "City",
//   "State",
//   "Zip Code",
// ];

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <div className="row">
      <div className="col my-3">
        <div className="input-group mb-3">
          <input
            id="search"
            type="text"
            className="form-control"
            placeholder="Filter By Name"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
          />
          <button
            className="btn btn-primary btn-outline-secondary"
            type="button"
            onClick={onClear}
          >
            X
          </button>
        </div>
      </div>
    </div>
  </>
);

const columns = [
  {
    name: "First Name",
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row) => row.startDate,
    sortable: true,
  },
  {
    name: "Department",
    selector: (row) => row.department?.label ?? row.department,
    sortable: true,
  },
  {
    name: "Date of Birth",
    selector: (row) => row.dateBirth,
    sortable: true,
  },
  {
    name: "Street",
    selector: (row) => row.street,
    sortable: true,
  },
  {
    name: "City",
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: "State",
    selector: (row) => row.state?.label ?? row.state,
    sortable: true,
  },
  {
    name: "Zip Code",
    selector: (row) => row.zipCode,
    sortable: true,
  },
];

function Employee() {
  const dispatch = useDispatch();
  const { dataTable } = useSelector((state) => state.data);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = dataTable.filter(
    (item) =>
      item.firstName &&
      item.firstName.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  useEffect(() => {
    if (localStorage.getItem("employeesData")) {
      dispatch(getLocalStorageDataAction());
    }
  }, [dispatch]);

  return (
    <>
      <TopBar link="/" label="Home" hasBtn={true} />
      <main className="container-xxl">
        <div className="row">
          <div className="col my-3">
            <h2 className="my-0">Current Employees</h2>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <DataTable
                  columns={columns}
                  data={filteredItems}
                  pagination
                  paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                  subHeader
                  subHeaderComponent={subHeaderComponentMemo}
                  persistTableHead={true}
                />
                {/* <Table theadData={theadData} tbodyData={tbodyData} /> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Employee;
