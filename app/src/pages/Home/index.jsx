import TopBar from "../../components/TopBar/";
import FormCreateEmployee from "../../components/FormCreateEmployee/";

function Home() {
  return (
    <>
      <TopBar link="/Employee" label="View Current Employees" hasBtn={true} />
      <main className="wrapper">
        <h2>Create Employee</h2>
        <section className="content">
          <FormCreateEmployee />
        </section>
      </main>
    </>
  );
}

export default Home;
