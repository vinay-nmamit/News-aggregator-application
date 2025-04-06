import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import { UserProvider } from "./Context/UserContext"; // Import the UserProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <UserProvider> */}
      <App />
    {/* </UserProvider> */}
  </React.StrictMode>
);