import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/global.css";
import { FaHome, FaFire, FaList, FaCog, FaChevronDown, FaChevronUp } from "react-icons/fa";

function Sidebar() {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="sidebar">
      <h2>News Application</h2>
      <ul>
        {/* Home Link */}
        <NavLink 
          to="/home"
          style={{ color: 'inherit', textDecoration: 'none' }}
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaHome /> Home
          </li>
        </NavLink>

        {/* Trending Link */}
        <NavLink 
          to="/trending"
          style={{ color: 'inherit', textDecoration: 'none' }}
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaFire /> Trending
          </li>
        </NavLink>

        {/* Categories Dropdown */}
        <li 
          onClick={() => setShowCategories(!showCategories)} 
          className="category-item"
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <FaList />
          Categories
          {showCategories ? <FaChevronUp className="chevron" /> : <FaChevronDown className="chevron" />}
        </li>

        {showCategories && (
          <ul className="sublist">
            <NavLink 
              to="/politics" 
              style={{ color: 'inherit', textDecoration: 'none' }}
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              <li>Politics</li>
            </NavLink>
            <NavLink 
              to="/business" 
              style={{ color: 'inherit', textDecoration: 'none' }}
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              <li>Business</li>
            </NavLink>
            <NavLink 
              to="/tech" 
              style={{ color: 'inherit', textDecoration: 'none' }}
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              <li>Tech</li>
            </NavLink>
            <NavLink 
              to="/arts" 
              style={{ color: 'inherit', textDecoration: 'none' }}
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              <li>Arts</li>
            </NavLink>
            <NavLink 
              to="/science" 
              style={{ color: 'inherit', textDecoration: 'none' }}
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              <li>Science</li>
            </NavLink>
            <NavLink 
              to="/health" 
              style={{ color: 'inherit', textDecoration: 'none' }}
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              <li>Health</li>
            </NavLink>
            <NavLink 
              to="/sports" 
              style={{ color: 'inherit', textDecoration: 'none' }}
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              <li>Sports</li>
            </NavLink>
          </ul>
        )}

        {/* Settings Link */}
        <NavLink 
          to="/settings"
          style={{ color: 'inherit', textDecoration: 'none' }}
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaCog /> Settings
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
