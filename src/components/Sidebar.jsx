import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import { FaHome, FaFire, FaList, FaCog, FaChevronDown, FaChevronUp } from "react-icons/fa";

function Sidebar() {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="sidebar">
      <h2>News Application</h2>
      <ul>
        <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}>
          <li>
            <FaHome /> Home
          </li>
        </Link>
        <Link to="/trending" style={{ color: 'inherit', textDecoration: 'none' }}>
          <li>
            <FaFire /> Trending
          </li>
        </Link>
        <li onClick={() => setShowCategories(!showCategories)} className="category-item">
          <FaList />
          Categories
          {showCategories ? <FaChevronUp className="chevron" /> : <FaChevronDown className="chevron" />}
        </li>
        {showCategories && (
          <ul className="sublist">
            <Link to="/politics" style={{ color: 'inherit', textDecoration: 'none' }}>
              <li>Politics</li>
            </Link>
            <Link to="/business" style={{ color: 'inherit', textDecoration: 'none' }}>
              <li>Business</li>
            </Link>
            <Link to="/tech" style={{ color: 'inherit', textDecoration: 'none' }}>
              <li>Tech</li>
            </Link>
            <Link to="/arts" style={{ color: 'inherit', textDecoration: 'none' }}>
              <li>Arts</li>
            </Link>
            <Link to="/science" style={{ color: 'inherit', textDecoration: 'none' }}>
              <li>Science</li>
            </Link>
            <Link to="/health" style={{ color: 'inherit', textDecoration: 'none' }}>
              <li>Health</li>
            </Link>
            <Link to="/sports" style={{ color: 'inherit', textDecoration: 'none' }}>
              <li>Sports</li>
            </Link>
          </ul>
        )}
        <Link to="/settings" style={{ color: 'inherit', textDecoration: 'none' }}>
          <li>
            <FaCog /> Settings
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
