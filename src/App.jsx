import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Header from "./Components/Header";
import Homepage from "./Components/HomePage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ResetPassword from "./Components/ResetPassword";
import Collection from "./Components/Collection";
import Lookbook from "./Components/Lookbook";
import OurStory from "./Components/OurStory";
import Contact from "./Components/Contact";
import Sale from "./Components/Sale";

import './App.css'


function App() {

  return (
    <div >
      <Router>
      <Header />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/reset-password" exact element={<ResetPassword />} />
          <Route path="/collection" exact element={<Collection />} />
          <Route path="/lookbook" exact element={<Lookbook />} />
          <Route path="/our-story" exact element={<OurStory />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/sale" exact element={<Sale />} />
        </Routes>
        <ToastContainer autoClose={2500} theme="dark" newestOnTop={true} />
      </Router>
    </div>
  )
}

export default App
