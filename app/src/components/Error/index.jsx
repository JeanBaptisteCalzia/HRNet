import TopBar from "../../components/TopBar/";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <>
      <TopBar />
      <main className="wrapper">
        <h1>Oops! sorry page does not found</h1>
        <NavLink className="btn btn--secondary" to="/">
          Go back to home page
        </NavLink>
      </main>
    </>
  );
}

export default Error;
