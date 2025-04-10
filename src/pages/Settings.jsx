import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../styles/global.css';
import { UserContext } from '../Context/UserContext';
import NewsCard from '../components/NewsCard';

function Settings() {
  const { username, setUsername } = useContext(UserContext);
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [theme, setTheme] = useState('light');
  const [likedArticles, setLikedArticles] = useState([]);

  const email = localStorage.getItem('email');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark-mode', savedTheme === 'dark');

    if (email) {
      axios.get(`http://localhost:8080/api/users/profile?email=${email}`)
        .then(({ data: user }) => {
          setUsername(user.username);
          setProfileImage(user.profileImage);
        })
        .catch(err => console.error('Error fetching profile:', err));

      axios.get(`http://localhost:8080/api/users/${email}/liked-articles`)
        .then(({ data }) => setLikedArticles(data))
        .catch(err => console.error('Error fetching liked articles:', err));
    }
  }, [email, setUsername]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    axios.put(`http://localhost:8080/api/users/profile?email=${email}`, {
      username,
      password,
      profileImage
    })
      .then(() => {
        alert('Profile updated successfully!');
        setPassword('');
      })
      .catch(err => {
        console.error('Update failed:', err);
        alert('Failed to update profile');
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
        <div className="profile-image">
          {profileImage ? (
            <img src={profileImage} alt="Profile" />
          ) : (
            <span className="placeholder"></span>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="upload-input"
          />
        </div>
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
            <div className="liked-articles-container">
              {likedArticles.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p>You haven't liked any articles yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;