import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.facebook.com/supes007" target="_blank">
        <FaFacebookF />
      </a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/harsh-jaiswal-813575175/" target="_blank">
        <FaLinkedinIn />
      </a>
    </div>
    <div>
    <a href="https://www.instagram.com/bruce.wayne30" target="_blank">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
