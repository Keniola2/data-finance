import Analytics from "./component/Analytics";
import Cards from "./component/Cards";
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
    </div>
  );
}

export default App;
