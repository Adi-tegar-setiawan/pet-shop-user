// src/components/Account.js
import React, { useState } from 'react';
import './Account.css';

const Account = ({ user, onUpdateProfile }) => {
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [address, setAddress] = useState(user?.address || '');
  const [gender, setGender] = useState(user?.gender || '');
  const [profileImage, setProfileImage] = useState(user?.profileImage || '/images/default-profile.png');

  const handleUpdate = () => {
    // Memanggil fungsi pembaruan profil
    onUpdateProfile({ fullName, email, address, gender, profileImage });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="account">
      <h2>Manage Profile</h2>
      <div className="profile-section">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" className="profile-pic" />
          {/* Input file dihubungkan dengan label untuk tampilan yang rapi */}
          <input 
            type="file" 
            id="upload-profile" 
            onChange={handleImageChange} 
          />
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="form-section">
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
          <select 
            value={gender} 
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label htmlFor="upload-profile" className="upload">Choose New Image</label>
          <button onClick={handleUpdate}>Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
