import NavBar from "../components/navigation/Nav";
import Footer from "../components/footer/Footer";

const meist = () => {
  return (
    <>
      <NavBar />
      <div className="d-flex flex-column min-vh-100">
        <div className="container-md pt-5 mb-5 flex-grow-1">
          <h2>Meist</h2>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default meist;
