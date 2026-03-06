import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Home";
import Rak from "./Rak";
import Reader from "./Reader";

export default function App() {

return (

<Router>

  <Routes>

    {/* Halaman utama */}
    <Route path="/" element={<HomePage />} />

    {/* Halaman rak buku */}
    <Route path="/rak" element={<Rak />} />

    {/* Halaman membaca buku */}
    <Route path="/buku/:id" element={<Reader />} />

  </Routes>

</Router>

);

}
