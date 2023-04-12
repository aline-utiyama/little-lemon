import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const ConfirmedBooking = () => {
  return (
    <>
      <Header></Header>
      <Main>
        <div className="container">
          <div className="confirmation-section">
            <h3>Reservation Successfully Confirmed!</h3>
            <p>
              Thank you very much for choosing the Little Lemon restaurant! We
              are really looking forward to welcoming you.
            </p>
            <span>Feel free to Contact Us if anything changes.</span>
          </div>
        </div>
        <Menu></Menu>
      </Main>
      <Footer></Footer>
    </>
  );
};

export default ConfirmedBooking;
