import { NavLink } from "react-router-dom";
import FormCreateEmployee from "../../components/FormCreateEmployee/";

function Home() {
  return (
    <main>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <NavLink to="/Employee">View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <FormCreateEmployee />
      </div>
    </main>
  );
}

export default Home;
