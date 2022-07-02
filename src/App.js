import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import all the components
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Index from "./components/Index/Index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/ULTRA-template" element={<Index />} />
          <Route path="/ULTRA-template/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
