import { useState } from "react";
import TopBar from "../../components/TopBar/";
// import Table from "../../components/Table/"; // Custom component
import { tbodyData } from "../../data/tbodyData/";
import DataTable from "datatables.net-react";
import DataTablesCore from "datatables.net-bs5";
DataTable.use(DataTablesCore);

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
  const [tableData, setTableData] = useState([
    [
      "Tiger Nixon",
      "System Architect",
      "System Architect",
      "System Architect",
      "System Architect",
      "System Architect",
      "System Architect",
      "System Architect",
      "System Architect",
    ],
    [
      "Garrett Winters",
      "Accountant",
      "Accountant",
      "Accountant",
      "Accountant",
      "Accountant",
      "Accountant",
      "Accountant",
      "Accountant",
    ],
  ]);
  return (
    <>
      <TopBar link="/" label="Home" hasBtn={true} />
      <main className="wrapper">
        <h2>Current Employees</h2>
        <section className="content">
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
        </section>
      </main>
    </>
  );
}

export default Employee;
