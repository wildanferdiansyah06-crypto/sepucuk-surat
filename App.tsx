import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Home";
import Rak from "./Rak";
import Reader from "./Reader";
import Kirim from "./Kirim";

export default function App() {
return (
<Router>
<Routes>

    {/* Homepage */}
    <Route path="/" element={<HomePage />} />

    {/* Rak Buku */}
    <Route path="/rak" element={<Rak />} />

    {/* Reader Mode */}
    <Route path="/buku/:id" element={<Reader />} />

    {/* Kirim Karya */}
    <Route path="/kirim" element={<Kirim />} />

  </Routes>
</Router>

);
}
