import React from "react";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Video from "./components/Home/Video";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Projects from "./pages/Products";
// import Services from "./pages/Services";
// import Home from "./pages/Home";
const App = () => {
  return (
    <Router>
      <Navigation />
      <Video/>
    </Router>
  );
};

export default App;
