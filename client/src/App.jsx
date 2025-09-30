import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Home page contains all sections */}
        <Route path="/" element={<Home />} />
        {/* Separate page only for /service */}
        <Route path="/service" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
