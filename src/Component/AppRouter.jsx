import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import View from "./View";
import Add from "./Add";
import Edit from "./Edit";
import './spp.css';
import Display from "./Display";
import Addbooking from "./Addbooking";
import Editbooking from "./Editbooking";
import Viewbooking from "./Viewbooking";
import Register from "./Register";
import Login from "./Login";
import Forgot from "./Forgot";  
function AppRouter() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/View">Customer's List</Link>
            </li>
            
            <li>
              <Link to="/create">Add Customer </Link>
            </li>
            <li>
              <Link to="/update/:id">Update Customer </Link>
            </li>
            <li>
              <Link to="/viewbooking">View Bookings </Link>
            </li>
            <div class="dropdown">
             
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
              </ul>
            </div>


            <li>
              <input type='text' id="search"></input>
              <button>Search</button>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            {/* <li>
              <Link to="/forgot">Forgot</Link>
            </li> */}
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/view" element={<View />} />
        <Route path="/create" element={<Add />} />
        <Route path="/update/:id" element={<Edit />} />
        <Route path="/addbooking" element={<Addbooking />} />
        <Route path="/editbooking/:id" element={<Editbooking />} />
        <Route path="/viewbooking" element={<Viewbooking />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgot" element={<Forgot/>}/>
      </Routes>
    </Router>
  );
}

export default AppRouter;