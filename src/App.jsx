import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import { ToastContainer } from "react-toastify";

import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

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
import Product from "./Components/Product";
import Profile from "./Components/Profile";

import "./App.css";

function App() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("userToken")),
    cart: [
      {
        name: "Women’s Peach Training",
        img: "/images/recycled-shoe-product-image-004.jpg",
        count: 2,
        price: "79.90",
      },
      {
        name: "Women’s Peach Training",
        img: "/images/recycled-shoe-product-image-004.jpg",
        count: 2,
        price: "79.90",
      }
    ],
  };

  function myReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        break;
      case "logout":
        draft.loggedIn = false;
        break;
      case "addToCart":
        draft.cart = draft.cart.push(action.data);
    }
  }

  const [state, dispatch] = useImmerReducer(myReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
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
            <Route path="/product/:id" exact element={<Product />} />
            <Route path="/profile" exact element={<Profile />} />
          </Routes>
          <ToastContainer autoClose={2500} theme="dark" newestOnTop={true} />
        </Router>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
