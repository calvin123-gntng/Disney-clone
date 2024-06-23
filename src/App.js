import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Header, Home, Detail } from "./components";

// App component that sets up routing
const App = () => {
  return (
    <Router>
      {/* Header component is always displayed */}
      <Header />
      <Routes>
        {/* Login route */}
        <Route path="/" element={<Login />} />
        {/* Home route */}
        <Route path="/home" element={<Home />} />
        {/* Detail route for specific items */}
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
