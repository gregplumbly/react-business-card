import React from 'react';

export const Header = () => {
  return (
    <div>
      <img src="/images/profile.png" alt="profile" />
      <h1>Laura Smith</h1>
      <h2>Frontend Developer</h2>
      <h3>laurasmith.website</h3>
      <div className="buttons">
        <button className="email">
          <img src="/images/mail.svg" className="icon" />
          <a href="mailto:example@example.com">Email</a>
        </button>
        <button className="linkedin">
          <img src="/images/linkedin.png" className="icon" />
          <a href="https://www.linkedin.com">LinkedIn</a>
        </button>
      </div>
    </div>
  );
};
