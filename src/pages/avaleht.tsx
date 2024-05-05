import NavBar from "../components/navigation/Nav";
import Footer from "../components/footer/Footer";

const avaleht = () => {
  return (
    <>
      <NavBar />
      <div className="d-flex flex-column min-vh-100">
        <div className="container-md pt-5 mb-5">
          <div className="row">
            <div className="col-sm-6 mb-4 object-fit-lg-contain">
              <p className="display-7">
                A paragraph of placeholder text. We're using it here to show the
                use of the clearfix class. We're adding quite a few meaningless
                phrases here to demonstrate how the columns interact here with
                the floated image.
              </p>
              <p className="display-6">
                As you can see the paragraphs gracefully wrap around the floated
                image. Now imagine how this would look with some actual content
                in here, rather than just this boring placeholder text that goes
                on and on, but actually conveys no tangible information at. It
                simply takes up space and should not really be read.
              </p>
              <p className="display-7">
                And yet, here you are, still persevering in reading this
                placeholder text, hoping for some more insights, or some hidden
                easter egg of content. A joke, perhaps. Unfortunately, there's
                none of that here.
              </p>
            </div>
            <div className="col-sm-6">
              <img
                src="/images/frogImage.png"
                className="img-fluid"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default avaleht;
