import React from 'react';

export const Header = () => {
  return (
    <div>
      <img src="src/assets/profile.png" alt="profile" />
      <h1>Laura Smith</h1>
      <h2>Frontend developer</h2>
      <h3>laurasmith.website</h3>
      <div className="buttons">
        <button className="email">Email</button>
        <button className="linkedin">LinkedIn</button>
      </div>
    </div>
  );
};
