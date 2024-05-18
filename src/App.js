import React from "react";
import "./App.css";
import "./qr.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Scan from "./pages/Scan";
import Scan from "./pages/Scan-test";
import AdmitCard from "./pages/AdmitCard";

function App() {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan/:id" element={<Scan />} />
          <Route path="/admit-card" element={<AdmitCard />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
}

export default App;
