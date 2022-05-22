import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Blogs from "./Pages/Blogs/Blogs";
import Dashbord from "./Pages/Dashboard/Dashbord";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="dashboard" element={<Dashbord></Dashbord>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
