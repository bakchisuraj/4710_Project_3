import React from "react";
import "../style/About.css";// Import the CSS file

export default function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://media.istockphoto.com/id/1256096552/vector/about-us-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=KKozSJIgaX2lu1OIRY9Oc5Rp1GhQzpTIKatBtc_4lQQ="
              alt="About Us"
            />
          </div>
          <div className="about-text">
            <h2 className="about-title">MIT Student's Hub</h2>
            
            <p className="about-paragraph">
            Welcome to MIT Student's Hub! We are an exclusive platform crafted specifically for MIT students, offering a seamless and personalized shopping experience. Whether you need study essentials, tech gadgets, campus merchandise, or unique student services, we've got you covered. Our mission is to provide MIT students with a convenient space to shop, connect, and access everything they need to thrive on campus. Join us at MIT Student's Hub, where we make student life easier, smarter, and more enjoyable.


            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
