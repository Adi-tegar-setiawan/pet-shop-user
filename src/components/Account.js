// src/components/Account.js

import React, { useState } from 'react';
import './Account.css';

const Account = ({ user, onUpdateProfile }) => {
  const [fullName, setFullName] = useState(user.fullName || '');
  const [email, setEmail] = useState(user.email || '');
  const [address, setAddress] = useState(user.address || '');
  const [gender, setGender] = useState(user.gender || '');
  const [profileImage, setProfileImage] = useState(user.profileImage || '');

  const handleUpdate = () => {
    onUpdateProfile({ fullName, email, address, gender, profileImage });
  };

  return (
    <div className="account">
      <h2>Profile</h2>
      <div className="profile-image">
        {profileImage ? <img src={profileImage} alt="Profile" /> : <p>No profile image</p>}
        <input type="file" onChange={(e) => setProfileImage(URL.createObjectURL(e.target.files[0]))} />
      </div>
      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default Account;
