import { useState, useEffect } from "react";
import Header from "../../components/Header/";
// import Table from "../../components/Table/"; // Custom component
import { tbodyData } from "../../data/tbodyData/";

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
  return (
    <>
      <Header link="/" label="Home" hasBtn={true} />
      <main className="wrapper">
        <h2>Current Employees</h2>
        <section className="content">
          {/* <Table theadData={theadData} tbodyData={tbodyData} /> */}
        </section>
      </main>
    </>
  );
}

export default Employee;
