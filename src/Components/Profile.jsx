import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DispatchContext from "../DispatchContext";

function Profile() {
  const appDispatch = useContext(DispatchContext);
  const navigate = useNavigate();
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const phoneNumber = localStorage.getItem("phoneNumber");

  const logout = () => {
    appDispatch({type: "logout"});
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("userToken");
    navigate("/");
  }

  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <p>{phoneNumber}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile