import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Heckfest from "./pages/Hackfest";
import OurTeam from "./pages/OurTeam";
import Robocor from "./pages/Robocor";
import Projects from "./pages/Projects";
import Alumini from "./pages/Alumini";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OurEvents from "./pages/OurEvents";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/alumini" element={<Alumini />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/ourteam" element={<OurTeam />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          {/* <Route path="/robocor" element={<Robocor />}></Route> */}
          {/* <Route path="/heckfest" element={<Heckfest />}></Route> */}
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
