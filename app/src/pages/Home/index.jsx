import Header from "../../components/Header/";
import FormCreateEmployee from "../../components/FormCreateEmployee/";

function Home() {
  return (
    <>
      <Header link="/Employee" label="View Current Employees" hasBtn={true} />
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
