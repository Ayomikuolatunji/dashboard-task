import React from "react";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Login from "./auth/login/Login";
import Signup from "./auth/signup/Signup";
import DashboardLayouts from "./pages/DashboardLayout";
import Verifier from "./pages/Verifier";




function App() {
  return (
    <Router>
      <div className="w-full">
        <Routes>
          <Route element={<DashboardLayouts/>}>
            <Route path="/" element={<Verifier/>} />
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Signup/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
