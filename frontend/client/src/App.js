import Map from "./components/Map";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ManageWardAndDistrict from "./components/ManageWardAndDistrict";
import NavBar from "./components/NavBar";
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";



function App() {
  return (
    <Router className="App">
      <NavBar/>
      <Routes>
        <Route path="/map" element={<Map/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/manage" element={<ManageWardAndDistrict/>}/>
        <Route path="/" element={<Navigate replace to="/map"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
