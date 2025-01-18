import Header from "../../components/Header/";

function Employee() {
  return (
    <>
      <Header link="/" label="Home" hasBtn={true} />
      <main className="wrapper">
        <h2>Current Employees</h2>
      </main>
    </>
  );
}

export default Employee;
