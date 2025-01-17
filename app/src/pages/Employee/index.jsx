import { NavLink } from "react-router-dom";
function Employee() {
  return (
    <main>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <NavLink to="/">Home</NavLink>
      </div>
    </main>
  );
}

export default Employee;
