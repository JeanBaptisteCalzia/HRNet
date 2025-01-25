import TopBar from "../../components/TopBar/";
import FormCreateEmployee from "../../components/FormCreateEmployee/";

function Home() {
  return (
    <>
      <TopBar link="/Employee" label="View Current Employees" hasBtn={true} />
      <main className="container-xxl">
        <div className="row">
          <div className="col my-3">
            <h2 className="my-0">Create Employee</h2>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <FormCreateEmployee />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
