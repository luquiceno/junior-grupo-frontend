import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Contact from "./components/Contact";
import Calendario from "./components/Calendario";
import Misactividades from "./components/Misactividades";
import Comunidad from "./components/Comunidad";
import Otros from "./components/Otros";
import FooterApp from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Misactividades />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/otros" element={<Otros />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FooterApp />
      </div>
    </Router>
  );
}

export default App;
