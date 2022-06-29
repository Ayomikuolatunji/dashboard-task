import React from "react";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import cookieService from "./auth/cookieService";
import Login from "./auth/login/Login";
import Signup from "./auth/signup/Signup";
import DashboardLayouts from "./pages/DashboardLayout";
import Verifier from "./pages/Verifier";




function App() {
  // redirect to login page route if token does not exit in localstorage
  if(!sessionStorage.getItem("token")&& !cookieService.get("token")){
     return <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
     </Router>
  }


  
  return (
    <Router>
      <div className="w-full">
        <Routes>
          <Route element={<DashboardLayouts/>}>
            <Route path="/" element={<Verifier/>} />
          </Route>
          <Route path="/register" element={<Signup/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
