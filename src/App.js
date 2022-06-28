import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

//pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Errorpage from "./pages/Errorpage";
import Club from "./pages/Club";
import Create from "./pages/Create";

//fetchins the data
const url = " http://localhost:3000/clubs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/clubs/:id" element={<Club />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
