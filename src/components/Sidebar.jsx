import { useState,useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaFire, FaList, FaCog, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { UserContext } from "../Context/UserContext";
import LogOut from "./LogOut";

function Sidebar() {
  const [showCategories, setShowCategories] = useState(false);
  const { username } = useContext(UserContext);
  // const { username } = userContext(UserContext);
  const categories = ["politics", "business", "tech", "arts", "science", "health", "sports"];

  return (
    <div className="sidebar">
      <h2>News Application</h2>
      <ul>
          <NavLink to={`/${username}`}  style={{ color: 'inherit', textDecoration: 'none' }} className={({ isActive }) => isActive ? 'active-link' : ''}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaHome /> Home</li>
        </NavLink>

        <NavLink to="/trending"  style={{ color: 'inherit', textDecoration: 'none' }} className={({ isActive }) => isActive ? 'active-link' : ''}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaFire /> Trending</li>
        </NavLink>

        <li onClick={() => setShowCategories(!showCategories)} className="category-item">
          <FaList /> Categories {showCategories ? <FaChevronUp /> : <FaChevronDown />}
        </li>

        {showCategories && (
          <ul className="sublist">
            {categories.map((category) => (
              <NavLink key={category} to={`/category/${category}`}  style={{ color: 'inherit', textDecoration: 'none' }} className={({ isActive }) => isActive ? 'active-link' : ''}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>{category.charAt(0).toUpperCase() + category.slice(1)}</li>
              </NavLink>
            ))}
          </ul>
        )}

        <NavLink to="/settings"  style={{ color: 'inherit', textDecoration: 'none' }} className={({ isActive }) => isActive ? 'active-link' : ''}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaCog /> Settings</li>
        </NavLink>
        <>
        <LogOut/>
        </>
        
      </ul>
    </div>
  );
}

export default Sidebar;
