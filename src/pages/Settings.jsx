import { useState, useEffect } from "react";
import "../styles/global.css";

function Settings() {
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState("John Doe");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("16px");

  // Load stored theme and font size from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const savedFontSize = localStorage.getItem("fontSize") || "16px";

    setTheme(savedTheme);
    setFontSize(savedFontSize);

    document.body.className = savedTheme; // Apply theme to body
    document.documentElement.style.fontSize = savedFontSize; // Apply font size
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
  document.body.className = newTheme; // ✅ Apply theme class to body
  localStorage.setItem("theme", newTheme);
};


  // Handle font size change
  const handleFontSizeChange = (e) => {
    const newSize = e.target.value;
    setFontSize(newSize);
    document.documentElement.style.fontSize = newSize;
    localStorage.setItem("fontSize", newSize);
  };

  return (
    <div className="settings-container">
      {/* ✅ Profile Header */}
      <div className="profile-header">
        <h1>Welcome, {username}</h1>
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
      </div>

      {/* ✅ Flex Container to Align Horizontally */}
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
          <button className="save-btn" onClick={handleSave}>
            Save Changes
          </button>
        </div>

        {/* ✅ Personalization Section */}
        <div className="profile-section">
          <h2>Personalization</h2>

          {/* Theme Switch */}
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

          {/* Font Size Dropdown */}
          <div className="form-group">
            <label>Font Size</label>
            <select
              value={fontSize}
              onChange={handleFontSizeChange}
              className="dropdown"
            >
              <option value="14px">Small</option>
              <option value="16px">Medium</option>
              <option value="18px">Large</option>
            </select>
          </div>
        </div>
      </div>

      {/* ✅ Saved and Liked Cards */}
      <div className="cards-section">
        <div className="card">
          <h3>Saved Items</h3>
          <p>You have 5 saved items.</p>
        </div>
        <div className="card">
          <h3>Liked Items</h3>
          <p>You have 8 liked items.</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
