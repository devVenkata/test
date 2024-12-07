// Sidebar.js
import React from 'react';
import {} from 'lucide-react';
// import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item active">
        
        Home
      </div>
      <div className="sidebar-item">
        
        Personal info
      </div>
      <div className="sidebar-item">
        
        Data & privacy
      </div>
      <div className="sidebar-item">
        
        Security
      </div>
      <div className="sidebar-item">
        
        People & sharing
      </div>
      <div className="sidebar-item">
        
        Payments & subscriptions
      </div>
      <div className="sidebar-item">
        
        About
      </div>
    </div>
  );
};

export default Sidebar;
























// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useAuthStore } from '../store/authStore';
// // import { toast } from 'sonner'

// // const navigate = useNavigate();
// // const [, setIsProfileOpen] = useState(false);
// // const { user, isAuthenticated, logout } = useAuthStore();

// // const handleLogout = () => {
// //     logout();
// //     toast.success('Successfully logged out');
// //     navigate('/');
// //     setIsProfileOpen(false);
// // };

// const Profile = () => {
//   const containerStyle = {
//     maxWidth: "900px",
//     margin: "0 auto",
//     padding: "20px",
//     fontFamily: "Arial, sans-serif",
//     color: "#333",
//   };

//   const sectionStyle = {
//     background: "#f9f9f9",
//     padding: "20px",
//     marginBottom: "20px",
//     borderRadius: "10px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//   };

//   const buttonStyle = {
//     padding: "10px 15px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   };

//   const editBtnStyle = { ...buttonStyle, backgroundColor: "#007bff", color: "#fff" };
//   const detailsBtnStyle = { ...buttonStyle, backgroundColor: "#28a745", color: "#fff" };
//   const supportBtnStyle = { ...buttonStyle, backgroundColor: "#ffc107", color: "#fff" };
//   const logoutBtnStyle = { ...buttonStyle, backgroundColor: "#dc3545", color: "#fff" };

//   const profilePictureStyle = {
//     width: "100px",
//     height: "100px",
//     borderRadius: "50%",
//     border: "2px solid #ddd",
//   };


//   return (
//     <div style={containerStyle}>
//       {/* Personal Information Section */}
//       <div style={sectionStyle}>
//         <h2>Personal Information</h2>
//         <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
//           <img
//             src=""
//             alt="Profile"
//             style={profilePictureStyle}
//           />
//           <div>
//             <p><strong>Name:</strong> John Doe</p>
//             <p><strong>Email:</strong> john.doe@example.com</p>
//             <p><strong>Phone:</strong> +91 9876543210</p>
//             <button style={editBtnStyle}>Edit Profile</button>
//           </div>
//         </div>
//       </div>

//       {/* Booking Details Section */}
//       <div style={sectionStyle}>
//         <h2>Booking Details</h2>
//         <div>
//           <h3>Current Booking</h3>
//           <p><strong>PG Name:</strong> XYZ Residency</p>
//           <p><strong>Location:</strong> HSR Layout, Bangalore</p>
//           <p><strong>Check-in:</strong> 01-Dec-2024</p>
//           <p><strong>Rent:</strong> ₹10,000/month</p>
//           <button style={detailsBtnStyle}>View Booking</button>
//         </div>

//         <div>
//           <h3>Previous Bookings</h3>
//           <ul>
//             <li>ABC Residency - Oct 2024</li>
//             <li>LMN Homes - Aug 2024</li>
//           </ul>
//         </div>
//       </div>

//       {/* Payment Information Section */}
//       <div style={sectionStyle}>
//         <h2>Payment Information</h2>
//         <div>
//           <h3>Payment History</h3>
//           <ul>
//             <li>Rent Payment: ₹10,000 - Nov 2024</li>
//             <li>Security Deposit Refund: ₹5,000 - Oct 2024</li>
//           </ul>
//           <h3>Pending Payments</h3>
//           <p>No pending payments.</p>
//         </div>
//       </div>

//       {/* Preferences Section */}
//       <div style={sectionStyle}>
//         <h2>Preferences</h2>
//         <p><strong>Preferred Location:</strong> Bangalore</p>
//         <p><strong>Room Type:</strong> Single Occupancy</p>
//         <p><strong>Dietary Preference:</strong> Vegetarian</p>
//       </div>

//       {/* Support Section */}
//       <div style={sectionStyle}>
//         <h2>Support</h2>
//         <button style={supportBtnStyle}>Raise a Complaint</button>
//         <button style={supportBtnStyle}>Contact Support</button>
//       </div>

//       {/* Logout Section */}
      
        

//         <div style={sectionStyle}>
//         <button style={logoutBtnStyle}
//         // onClick={handleLogout}
//         >Logout</button>
//         </div>
//     </div>
//   );
// };

// export default Profile;








// // import React from "react";
// // // import "./Profile.css"; // Import the CSS file for styling

// // const Profile = () => {
// //   return (
// //     <div className="max-width: 900px;margin: 0 auto;padding: 20px;font-family: Arial, sans-serif;color: #333;">
// //       {/* Personal Information Section */}
// //       <div className="background: #f9f9f9;padding: 20px;margin-bottom: 20px;border-radius: 10px;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
// //         <h2>Personal Information</h2>
// //         <div className="display: flex;align-items: center;gap: 20px;">
// //           <img
// //             src=""
// //             alt="Profile"
// //             className="profile-picture"
// //           />
// //           <div className="details">
// //             <p><strong>Name:</strong> John Doe</p>
// //             <p><strong>Email:</strong> john.doe@example.com</p>
// //             <p><strong>Phone:</strong> +91 9876543210</p>
// //             <button className="edit-btn">Edit Profile</button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Booking Details Section */}
// //       <div className="profile-container">
// //         <h2>Booking Details</h2>
// //         <div className="booking-info">
// //           <h3>Current Booking</h3>
// //           <p><strong>PG Name:</strong> XYZ Residency</p>
// //           <p><strong>Location:</strong> HSR Layout, Bangalore</p>
// //           <p><strong>Check-in:</strong> 01-Dec-2024</p>
// //           <p><strong>Rent:</strong> ₹10,000/month</p>
// //           <button className="details-btn">View Booking</button>
// //         </div>

// //         <div className="booking-history">
// //           <h3>Previous Bookings</h3>
// //           <ul>
// //             <li>ABC Residency - Oct 2024</li>
// //             <li>LMN Homes - Aug 2024</li>
// //           </ul>
// //         </div>
// //       </div>

// //       {/* Payment Information Section */}
// //       <div className="profile-section">
// //         <h2>Payment Information</h2>
// //         <div className="payment-info">
// //           <h3>Payment History</h3>
// //           <ul>
// //             <li>Rent Payment: ₹10,000 - Nov 2024</li>
// //             <li>Security Deposit Refund: ₹5,000 - Oct 2024</li>
// //           </ul>
// //           <h3>Pending Payments</h3>
// //           <p>No pending payments.</p>
// //         </div>
// //       </div>

// //       {/* Preferences Section */}
// //       <div className="profile-section">
// //         <h2>Preferences</h2>
// //         <p><strong>Preferred Location:</strong> Bangalore</p>
// //         <p><strong>Room Type:</strong> Single Occupancy</p>
// //         <p><strong>Dietary Preference:</strong> Vegetarian</p>
// //       </div>

// //       {/* Support Section */}
// //       <div className="profile-section">
// //         <h2>Support</h2>
// //         <button className="support-btn">Raise a Complaint</button>
// //         <button className="support-btn">Contact Support</button>
// //       </div>

// //       {/* Logout Section */}
// //       <div className="profile-section logout-section">
// //         <button className="logout-btn">Logout</button>
// //       </div>
// //     </div>
// //   );
// // };


// // // CSS for Above Profile



// // export default Profile;

// // // CSS for Above Profile


// // /* General Container */
// // // .profile-container {
// // //     max-width: 900px;
// // //     margin: 0 auto;
// // //     padding: 20px;
// // //     font-family: Arial, sans-serif;
// // //     color: #333;
// // // }

// // /* Section Styling */
// // // .profile-section {
// // //   background: #f9f9f9;
// // //   padding: 20px;
// // //   margin-bottom: 20px;
// // //   border-radius: 10px;
// // //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// // // }

// // // .profile-section h2 {
// // //   margin-bottom: 15px;
// // //   font-size: 1.5rem;
// // //   color: #444;
// // // }

// // /* Personal Information Section */
// // // .profile-info {
// // //   display: flex;
// // //   align-items: center;
// // //   gap: 20px;
// // // }

// // // .profile-picture {
// // //   width: 100px;
// // //   height: 100px;
// // //   border-radius: 50%;
// // //   border: 2px solid #ddd;
// // // }

// // // .details p {
// // //   margin: 5px 0;
// // // }

// // // .edit-btn {
// // //   background-color: #007bff;
// // //   color: #fff;
// // //   padding: 10px 15px;
// // //   border: none;
// // //   border-radius: 5px;
// // //   cursor: pointer;
// // // }

// // // /* Booking Details */
// // // .booking-info, .booking-history {
// // //   margin-bottom: 15px;
// // // }

// // // .details-btn {
// // //   background-color: #28a745;
// // //   color: #fff;
// // //   padding: 10px 15px;
// // //   border: none;
// // //   border-radius: 5px;
// // //   cursor: pointer;
// // // }

// // // /* Payment Section */
// // // .payment-info ul {
// // //   list-style: none;
// // //   padding: 0;
// // // }

// // // .payment-info ul li {
// // //   margin-bottom: 10px;
// // // }

// // // /* Preferences Section */
// // // .profile-section p {
// // //   margin: 5px 0;
// // // }

// // // /* Support Section */
// // // .support-btn {
// // //   display: block;
// // //   background-color: #ffc107;
// // //   color: #fff;
// // //   padding: 10px 15px;
// // //   margin: 10px 0;
// // //   border: none;
// // //   border-radius: 5px;
// // //   cursor: pointer;
// // // }

// // // /* Logout Section */
// // // .logout-btn {
// // //   display: block;
// // //   background-color: #dc3545;
// // //   color: #fff;
// // //   padding: 10px 15px;
// // //   margin: 10px auto;
// // //   border: none;
// // //   border-radius: 5px;
// // //   cursor: pointer;
// // //   text-align: center;
// // // }

