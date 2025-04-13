import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../styles/global.css';
import { UserContext } from '../Context/UserContext';
import NewsCard from '../components/NewsCard';

function Settings() {
  const { username, setUsername } = useContext(UserContext);
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('light');
  const [likedArticles, setLikedArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark-mode', savedTheme === 'dark');

    if (username) {
      // Fetch user profile by username
      axios.get(`http://localhost:8080/api/users/profile/${username}`)
        .then(({ data: user }) => {
          setUsername(user.username);
        })
        .catch(err => console.error('Error fetching profile:', err));

      // Fetch liked articles
      axios.get(`http://localhost:8080/api/users/${username}/liked-articles`)
        .then(({ data }) => setLikedArticles(data))
        .catch(err => {
          console.error('Error fetching liked articles:', err);
          setLikedArticles([]);
        });

      // Fetch saved articles
      axios.get(`http://localhost:8080/api/users/${username}/saved-articles`)
        .then(({ data }) => setSavedArticles(data))
        .catch(err => {
          console.error('Error fetching saved articles:', err);
          setSavedArticles([]);
        });
    }
  }, [username, setUsername]);

  const handleSave = () => {
  if (!username) {
    alert('Username is required.');
    return;
  }

  if (!password) {
    alert('Please enter a new password');
    return;
  }

  axios.put(`http://localhost:8080/api/users/profile/${username}`, {
    username,
    password
  })
    .then(() => {
      alert('Profile updated successfully!');
      setPassword('');
    })
    .catch(err => {
      console.error('Update failed:', err);
      if (err.response) {
        if (err.response.status === 404) {
          alert('Profile update endpoint not found. Please check backend service.');
        } else {
          alert(`Failed to update profile: ${err.response.data.message || err.message}`);
        }
      } else {
        alert('Network error. Please check your connection.');
      }
    });
};

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark-mode', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div>
      <div className="profile-header">
        <h1>Welcome, {username}</h1>
      </div>

      <div className="profile-wrapper">
        <div className="profile-section">
          <h2>Update Profile</h2>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </div>
          <button className="btn btn-dark" onClick={handleSave}>Save Changes</button>
        </div>

        <div className="profile-section">
          <h2>Personalization</h2>
          <div className="form-group">
            <div className="theme-toggle">
              <span>Light</span>
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={handleThemeChange}
              />
              <span>Dark</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-wrapper">
        <div className="profile-section">
          <h3>Your Liked Articles</h3>
          {likedArticles.length > 0 ? (
            <div className="liked-articles-container d-flex w-100 flex-wrap">
              {likedArticles.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p>You haven't liked any articles yet.</p>
          )}
        </div>
      </div>

      <div className="profile-wrapper">
        <div className="profile-section">
          <h3>Your Saved Articles</h3>
          {savedArticles.length > 0 ? (
            <div className="saved-articles-container d-flex w-100 flex-wrap">
              {savedArticles.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p>You haven't saved any articles yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
