import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import Pghunt from '../assets/PGhuntlogo.jpg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* logo */}
      <div className='footer-img'>
        <img src="Pghunt" alt="PG-Hunt" />
      </div>

      

      

      {/* Company   address */}
      <div className='footer-address'>
          <p>Corporate Office</p> <br />
          <p>No. 1xx0, 22nd Cross, HSR Layout, Sector 3</p>
          <p>Bangalore, Karnataka</p>
          <p>India - 560102</p>
        </div>

        {/* Links */}
        <div className='footer-links'>
          <h4>Useful Links</h4> <br />
            <ul >
              <li><a href="#privacy-policy" >Privacy Policy</a></li>
              <li><a href="#terms-conditions" >Terms & Conditions</a></li>
              <li><a href="#careers" >Careers</a></li>
              <li><a href="#investor-relations" >Investor Relations</a></li>
            </ul>
        </div>

        {/* Social Media Follow US */}
        <div className='footer-links'>
        <h4>Follow Us</h4> <br />
          <div className='soical-icons'>
            <ul>
            <li> <a href="#facebook" >Facebook</a> </li>
            <li> <a href="#twitter" >Twitter</a> </li>
            <li> <a href="#linkedin" >LinkedIn</a> </li>
            <a href="https://www.youtube.com/" >YouTube</a>
            </ul> 
          </div>
          {/* <br /> */}
        </div>

        {/* Contact Details */}
        <div className='footer-contact'>
          <h4>Contact Us</h4> <br />
             <p>+91 9908072887</p>
             <p>info@pghunt.com</p>
        </div>

        {/* Scan the QR */}
          <div className='footer-qr'>
            <h4>Scan the QR to install App!</h4>
            <img src="" alt="" />
          </div>

      </div>
      

        {/* Copy Right */}
        <div> 
          <hr /> <p>© 2024 PG Hunt Pvt Limited and Solutions. All rights reserved.</p> <hr />
        </div>
    </footer>
  );
}


export default Footer;




// const 1Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">


//         <div className="footer-section">
//             {/* <img src="zolo-logo.png" alt="PG Logo" className="footer-logo" /> */}

//           <div >
            
//             <p className='pg'>PG Hunt</p>
//             <p>Scan the QR to install the app!</p>
//             <img src="qr-code.png" alt="QR Code" className="qr-code" />
//           </div>


//           <div className="footer-links">
//             <h3>Product</h3>
//             <ul>
//               <li><a href="/faqs">FAQs</a></li>
//               <li><a href="/scholar-faqs">Scholar FAQs</a></li>
//               <li><a href="/how-it-works">How it Works</a></li>
//               <li><a href="/list-your-property">List Your Property</a></li>
//               <li><a href="/zo-tales">Zo-Tales</a></li>
//               <li><a href="/amenities">Amenities</a></li>
//               <li><a href="/testimonials">Testimonials</a></li>
//             </ul>
//           </div>


//           <div className="footer-links">
//             <h3>Company</h3>
//             <ul>
//               <li><a href="/about-us">About Us</a></li>
//               <li><a href="/careers">Careers</a></li>
//               <li><a href="/contact-us">Contact Us</a></li>
//               <li><a href="/blog">Blog</a></li>
//               <li><a href="/privacy-policy">Privacy Policy</a></li>
//               <li><a href="/terms-conditions">T&C</a></li>
//               <li><a href="/disclaimers">Disclaimers</a></li>
//               <li><a href="/sitemap">Sitemap</a></li>
//               <li><a href="/why-choose-zolo">Why Choose Zolo</a></li>
//             </ul>
//           </div>

//           <div className="footer-contact">
//              <br />


//             <p>Stay In Touch</p>

//             {/* <div className="social-icons">
//               <a href="/facebook"><img src="facebook" alt="Facebook" /></a>
//               <a href="/instagram"><img src="instagram" alt="Instagram" /></a>
//               <a href="/youtube"><img src="youtube" alt="YouTube" /></a>
//               <a href="/x"><img src="x" alt="x" /></a>
//             </div> */}

//           </div>

//         </div>

        

//       </div>
//     </footer>
//   );
// };


