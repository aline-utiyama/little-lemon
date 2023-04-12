import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <div className="app">
      <Header></Header>
      <Main>
        <Banner></Banner>
        <Menu></Menu>
      </Main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
