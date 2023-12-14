import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import ResetPassword from "./Components/ResetPassword/ResetPassword";

import './App.css'

function App() {

  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/reset-password" exact element={<ResetPassword />} />
        </Routes>
        <ToastContainer autoClose={2500} theme="dark" newestOnTop={true} />
      </Router>
    </div>
  )
}

export default App
