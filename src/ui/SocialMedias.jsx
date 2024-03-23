import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";

function SocialMedias() {
  return (
    <div className="flex items-center   child-hover:bg-gray_base/25 child:px-2 child:py-2 child:rounded-lg child:tr-300 child:justify-center justify-center">
      <Link
        target="blank"
        className="child:w-10 child:h-10 mr-2"
        to={"https://github.com/Alireza-Naghavian"}
      >
        <FaGithub />
      </Link>
      <Link
        target="blank"
        className="child:w-10 child:h-10 mr-2"
        to={"https://www.instagram.com/alirezangh123123"}
      >
        <IoLogoInstagram />
      </Link>
      <Link
        target="blank"
        className="child:w-10 child:h-10 mr-2"
        to={"https://www.linkedin.com/in/alireza-naghavian-462505271/"}
      >
        <CiLinkedin />
      </Link>
    </div>
  );
}

export default SocialMedias;
