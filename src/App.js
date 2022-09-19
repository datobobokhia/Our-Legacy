import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryA from "./pages/CategoryA";
import CategoryB from "./pages/CategoryB";
import CategoryC from "./pages/CategoryC";
import CategoryD from "./pages/CategoryD";
import CategoryE from "./pages/CategoryE";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoryA" element={<CategoryA />} />
        <Route path="/categoryB" element={<CategoryB />} />
        <Route path="/categoryC" element={<CategoryC />} />
        <Route path="/categoryD" element={<CategoryD />} />
        <Route path="/categoryE" element={<CategoryE />} />
      </Routes>
    </Router>
  );
}

export default App;
