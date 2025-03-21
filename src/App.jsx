import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Trending from "./pages/Trending"; // Import the Trending page
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login page without sidebar */}
        <Route path="/" element={<LoginPage />} />

        {/* Pages with sidebar */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/trending" element={<Trending />} /> {/* Added Trending */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
