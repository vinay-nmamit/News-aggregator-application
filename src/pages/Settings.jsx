import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../styles/global.css";
import { UserContext } from "../Context/UserContext";

function Settings() {
  const { username, setUsername } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [theme, setTheme] = useState("light");

  const email = localStorage.getItem("email"); // ✅ Email stored after login

  // Load theme and user data
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark-mode", savedTheme === "dark");

    // ✅ Fetch user details from backend
    if (email) {
      axios.get(`http://localhost:8080/api/users/profile?email=${email}`)
        .then(res => {
          const user = res.data;
          setUsername(user.username);
          setProfileImage(user.profileImage);
        })
        .catch(err => console.error("Error fetching profile:", err));
    }
  }, [email, setUsername]);

  // Convert image to base64 and set it
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Save changes to backend
  const handleSave = () => {
    axios.put(`http://localhost:8080/api/users/profile?email=${email}`, {
      username,
      password,
      profileImage
    })
      .then(res => {
        alert("Profile updated successfully!");
        setPassword(""); // Clear password field
      })
      .catch(err => {
        console.error("Update failed:", err);
        alert("Failed to update profile");
      });
  };

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
