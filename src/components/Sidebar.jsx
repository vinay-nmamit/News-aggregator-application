import { FaHome, FaFire, FaThList, FaCog } from 'react-icons/fa';
import "../styles/global.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>News Application</h2>
      <ul>
        <li><FaHome /> Home</li>
        <li><FaFire /> Trending</li>
        <li><FaThList /> Categories</li>
        <li><FaCog /> Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
