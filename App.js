import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Kids from "./components/Kids";
import Contact from "./components/Contact";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/mens/tops" element={<Mens category="tops" />} />
          <Route path="/mens/bottoms" element={<Mens category="bottoms" />} />
          <Route
            path="/mens/accessories"
            element={<Mens category="accessories" />}
          />
          <Route path="/womens" element={<Womens />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/loginpage" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
