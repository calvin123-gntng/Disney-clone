import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Header, Home, Detail } from "./components";

// App component that sets up routing
const App = () => {
  return (
    <Router>
      <Header />  // Header component is always displayed
      <Routes>
        <Route path="/" element={<Login />} />  // Login route
        <Route path="/home" element={<Home />} />  // Home route
        <Route path="/detail/:id" element={<Detail />} />  // Detail route for specific items
      </Routes>
    </Router>
  );
};

export default App;
