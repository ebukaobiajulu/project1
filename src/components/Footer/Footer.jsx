import React from "react";
import "./footer.css";
import FooterLogo from "../../assets/footer-logo.png";
import sendIcon from "../../assets/send-icon.png";
import FooterImg from "../../assets/footer-frame.png";
import FacebookIcon from "../../assets/social-media/Icon-Facebook.png";
import TwitterIcon from "../../assets/social-media/Icon-Twitter.png";
import InstagramIcon from "../../assets/social-media/icon-instagram.png";
import LinkedinIcon from "../../assets/social-media/Icon-Linkedin.png";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer">
        <div className="container">
          <div className="footer-col">
            <ul className="footer-menu">
              <img src={FooterLogo} alt="" className="footer-logo" />
              <li>Subscribe</li>
              <li>Get 10% off your first order</li>
              <div className="footer-form-field">
                <input
                  type="email"
                  className="footer-form"
                  placeholder="Enter your email"
                />
                <img src={sendIcon} alt="" className="send-icon"/>
              </div>
            </ul>
            <ul className="footer-menu">
              <li className="first-item">Support</li>
              <li>12, Alhaja Adenike Street, iju road, Lagos </li>
              <li>ihamroland@gmail.com</li>
              <li>+234 807 4238929</li>
            </ul>
            <ul className="footer-menu">
              <li className="first-item">Account</li>
              <li>
                <a href="">My Account</a>
              </li>
              <li>
                <a href="#">Login / Register</a>
              </li>
              <li>Cart</li>
              <li>Shop</li>
            </ul>
            <ul className="footer-menu">
              <li className="first-item">Quick Link</li>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
            <ul className="footer-menu">
              <li className="first-item">Download App</li>
              <li>Save $3 with App New User Only</li>
              <img src={FooterImg} alt="" />
              <div className="social-media">
                <a href="">
                  <img src={FacebookIcon} alt="" />
                </a>
                <a href="">
                  <img src={TwitterIcon} alt="" />
                </a>
                <a href="">
                  <img src={InstagramIcon} alt="" />
                </a>
                <a href="">
                  <img src={LinkedinIcon} alt="" />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="hr-footer"></div>
        &copy; Copyright Rimel 2022. All right reserved
      </div>
    </div>
  );
};
export default Footer;
