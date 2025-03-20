import { useState } from "react";
import "../styles/global.css";
import { FaHome, FaFire, FaList, FaCog, FaChevronDown, FaChevronUp } from "react-icons/fa";

function Sidebar() {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="sidebar">
      <h2>News Application</h2>
      <ul>
        <li>
          <FaHome /> Home
        </li>
        <li>
          <FaFire /> Trending
        </li>
        <li onClick={() => setShowCategories(!showCategories)} className="category-item">
          <FaList />
          Categories
          {showCategories ? <FaChevronUp className="chevron" /> : <FaChevronDown className="chevron" />}
        </li>
        {showCategories && (
          <ul className="sublist">
            <li>Politics</li>
            <li>Business</li>
            <li>Tech</li>
            <li>Arts</li>
            <li>Science</li>
            <li>Health</li>
            <li>Sports</li>
          </ul>
        )}
        <li>
          <FaCog /> Settings
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
