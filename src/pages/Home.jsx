import Sidebar from '../components/Sidebar';
import "../styles/global.css";

function Home() {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="content">
        <h1>Latest News</h1>
        {/* Add your content here */}
      </div>
    </div>
  );
}

export default Home;
