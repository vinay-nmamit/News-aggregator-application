import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Trending from "./pages/Trending";
import Settings from "./pages/Settings";
import CategoryPage from "./pages/CategoryPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
