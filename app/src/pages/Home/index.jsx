import { NavLink } from "react-router-dom";
function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <NavLink to="/Employee">View Current Employees</NavLink>
    </main>
  );
}

export default Home;
