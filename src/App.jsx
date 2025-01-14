
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Deals from "./components/Deals";
import Review from "./components/Review";
import SpecialMenu from "./components/SpecialMenu";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="home">
        <Hero />
      </div>

      <div className="menu">
        <Menu />
      </div>

      <div id="deals">
        <Deals />
      </div>
      <SpecialMenu />
      <div id="special">
      <About/>
      </div>
      <Review />
      <Footer />
    </>
  );
};

export default App;
