import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import Rak from "./Rak";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Halaman Rak Buku */}
        <Route path="/rak" element={<Rak />} />

      </Routes>
    </Router>
  );
}
