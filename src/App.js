import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Works from "./pages/Works";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
      </div>
        <Footer />
    </Router>
  );
};

export default App;
