import React from 'react';
import './Footer.css'; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Tools</h4>
          <ul>
            <li><a href="#link1">Color Picker</a></li>
            <li><a href="#link2">Gradient Generator</a></li>
            <li><a href="#link3">Image Converter</a></li>
            <li><a href="#link4">Palette Creator</a></li>
            <li><a href="#link5">Color Matcher</a></li>
            <li><a href="#link6">Accessibility Checker</a></li>
            <li><a href="#link7">Contrast Checker</a></li>
            <li><a href="#link8">Color Blindness Simulator</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>More</h4>
          <ul>
            <li><a href="#link9">Browse Colors</a></li>
            <li><a href="#link10">Browse Gradients</a></li>
            <li><a href="#link11">Create a Gradient Palette</a></li>
            <li><a href="#link12">Image Converter</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Jobs</h4>
          <ul>
            <li><a href="#link13">Careers</a></li>
            <li><a href="#link14">Internships</a></li>
            <li><a href="#link15">Volunteer</a></li>
            <h4>App</h4>
            <li><a href="#link16">Download for iOS</a></li>
            <li><a href="#link17">Download for Android</a></li>
            <li><a href="#link18">Web App</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#link19">About Us</a></li>
            <li><a href="#link20">Contact</a></li>
            <li><a href="#link21">Privacy Policy</a></li>
            <li><a href="#link22">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-divider"></div> {/* Divider Line */}
      <div className="footer-attribution">
        Coolors by Fabrizio Bianchi. From Creative to Others.
      </div>
    </footer>
  );
};

export default Footer;
