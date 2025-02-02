import TopBar from "../../components/TopBar/";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <>
      <TopBar />
      <main className="container-xxl">
        <div className="row">
          <div className="col my-3">
            <h1>Oops! sorry page does not found</h1>
            <NavLink className="btn btn-primary" to="/">
              Go back to home page
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
}

export default Error;
