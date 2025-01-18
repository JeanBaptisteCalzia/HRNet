import Header from "../../components/Header/";
import Table from "../../components/Table/";

const theadData = [
  "First Name",
  "Last Name",
  "Start Date",
  "Department",
  "Date of Birth",
  "Street",
  "City",
  "State",
  "Zip Code",
];

const tbodyData = [
  {
    id: "1",
    items: [
      "John",
      "Doe",
      "07/21/2020",
      "Engineering",
      "07/16/1987",
      "Street",
      "City",
      "FR",
      "23423",
    ],
  },
  {
    id: "2",
    items: [
      "John",
      "Doe",
      "07/21/2020",
      "Engineering",
      "07/16/1987",
      "Street",
      "City",
      "FR",
      "23423",
    ],
  },
  {
    id: "3",
    items: [
      "John",
      "Doe",
      "07/21/2020",
      "Engineering",
      "07/16/1987",
      "Street",
      "City",
      "FR",
      "23423",
    ],
  },
];

function Employee() {
  return (
    <>
      <Header link="/" label="Home" hasBtn={true} />
      <main className="wrapper">
        <h2>Current Employees</h2>
        <section className="content">
          <Table theadData={theadData} tbodyData={tbodyData} />
        </section>
      </main>
    </>
  );
}

export default Employee;
