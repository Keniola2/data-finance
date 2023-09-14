import Analytics from "./component/Analytics";
import Cards from "./component/Cards";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import NavBar from "./component/NavBar";
import Newsletter from "./component/Newsletter";


function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <Hero/>
    <Analytics/>
    <Newsletter/>
    <Cards/>
    <Footer/>
    </div>
  );
}

export default App;
