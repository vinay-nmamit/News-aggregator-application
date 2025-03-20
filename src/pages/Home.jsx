import Sidebar from '../components/Sidebar';

function Home() {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="content">
        <h1>Latest News</h1>
        {/* Add other content here */}
      </div>
    </div>
  );
}

export default Home;
