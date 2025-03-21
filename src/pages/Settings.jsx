import { useState, useEffect } from "react";
import "../styles/global.css";

function Settings() {
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState("John Doe");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("light");

  // Load stored theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    // ✅ Apply theme on page load
    document.documentElement.classList.toggle("dark-mode", savedTheme === "dark");
  }, []);

  // Handle profile image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle saving profile details
  const handleSave = () => {
    console.log("Saved:", { username, password });
    alert("Profile updated successfully!");
  };

  // Handle theme change
  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.classList.toggle("dark-mode", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      {/* ✅ Profile Header */}
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

      {/* ✅ Profile & Personalization Sections */}
      <div className="profile-wrapper">
        {/* ✅ Profile Section */}
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

        {/* ✅ Personalization Section */}
        <div className="profile-section">
          <h2>Personalization</h2>
          <div className="form-group">
            <div className="theme-toggle">
              <span>Light</span>
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={handleThemeChange}
              />
              <span>Dark</span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Saved & Liked Items */}
      <div className="profile-wrapper">
        <div className="profile-section">
          <h3>Saved Items</h3>
          <p>You have 5 saved items.</p>
        </div>
        <div className="profile-section">
          <h3>Liked Items</h3>
          <p>You have 8 liked items.</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
