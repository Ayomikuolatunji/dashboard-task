import React from "react";
import { Routes, Route, } from "react-router-dom";
import Login from "./auth/Login";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
