// HelpAndEarn.js
import React from 'react';
// import './HelpAndEarn.css'; // Import the CSS file for styling

const ReferAndEarn = () => {
  const referralLink = 'https://www.pghunt.com/';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  return (
    <div className="help-and-earn-container">
      <h2 className="help-and-earn-title">KodNest Help and Earn Program</h2>
      <div className="referral-bonus">
        <img src="path-to-your-icon.png" alt="Referral Icon" className="referral-icon" />
        <p className="referral-text">
          Referral Bonus: Earn INR 5,000 per referral. Your friend will receive a 2k discount. Refer 50 students and earn INR 2,50,000!
        </p>
      </div>
      <div className="important-note">
        <p>
          Important: Ask your friends to mention your name and KodNest ID when filling out the registration form.
        </p>
      </div>
      <div className="referral-link">
        {/* <input type="text" value={referralLink} readOnly className="referral-input" /> */}
        <button onClick={copyToClipboard} className="copy-button">Copy</button>
      </div>
    </div>
  );
};

export default ReferAndEarn;
