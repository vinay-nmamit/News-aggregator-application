import "../styles/global.css";

function Home() {
  return (
    <div>
      <div className="header">
        <h1>Latest News</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search news..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
