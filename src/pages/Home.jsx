import Sidebar from '../components/Sidebar';
import "../styles/global.css";
import { useState } from 'react';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add search logic here
  };

  return (
    <div className="home-container">
      <Sidebar />
      <div className="content">
        {/* Header containing heading and search bar */}
        <div className="header">
          <h1>Latest News</h1>
          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
