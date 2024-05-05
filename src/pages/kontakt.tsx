import NavBar from "../components/navigation/Nav";
import Footer from "../components/footer/Footer";

const kontakt = () => {
  return (
    <>
      <NavBar />
      <div className="d-flex flex-column min-vh-100">
        <div className="container-md pt-5 mb-5 flex-grow-1">
          <div className="row">
            <h2>Kontakt</h2>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default kontakt;
