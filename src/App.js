import React from "react";
import { Routes, Route, } from "react-router-dom";
import Login from "./auth/login/Login";
import Signup from "./auth/signup/Signup";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
