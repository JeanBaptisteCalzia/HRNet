import { useState } from "react";
import TopBar from "../../components/TopBar/";
// import Table from "../../components/Table/"; // Custom component
import { tbodyData } from "../../data/tbodyData/";
import DataTable from "datatables.net-react";
import DataTablesCore from "datatables.net-bs5";

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

function Employee() {
  const [tableData, setTableData] = useState([tbodyData]);
  DataTable.use(DataTablesCore);

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
                <DataTable data={tableData} className="display">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Start Date</th>
                      <th>Department</th>
                      <th>Date of Birth</th>
                      <th>Street</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Zip Code</th>
                    </tr>
                  </thead>
                </DataTable>
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
