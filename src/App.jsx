import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Trending from "./pages/Trending";
import Settings from "./pages/Settings";
import CategoryPage from "./pages/CategoryPage";
import Layout from "./components/Layout";
import { UserContext } from "./Context/UserContext";

function App() {
  const [username, setUsername] = useState(() => localStorage.getItem('username') || '');
  const [email, setEmail] = useState(() => localStorage.getItem('email') || '');

  return (
    <UserContext.Provider value={{ username, setUsername, email, setEmail }}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path="/:username" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
