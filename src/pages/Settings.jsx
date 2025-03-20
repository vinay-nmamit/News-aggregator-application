import { useState } from "react";
import "../styles/global.css";

function Settings() {
  const [profileImage, setProfileImage] = useState(null);

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

  return (
    <div className="settings-container">
      <div className="profile-header">
        <h1>Welcome, John Doe</h1>
        <div className="profile-image">
          {profileImage && <img src={profileImage} alt="Profile" />}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="upload-input"
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;
