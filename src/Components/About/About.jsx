import React from "react";
import img from "../images/IMG-20200915-WA0010-01.jpeg";
import cv from "../images/shaaban Resume Web Developer.pdf";
import "./about.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div id="ABOUT" className="container my-5 py-4">
        <div className=" text-center">
          <h2 className="my-5 fs-1 fw-bold AboutMe">About Me</h2>
        </div>
        <div className="row">
          <div className="col-md-12 imageText">
            <div className="">
              <img className="img" src={img} alt="" />
            </div>
            <div className="aboutMe">
              <p>
                " I'm Shaaban Hamdy Shaaban 26 years old ,
                <br /> I live in Giza and I have a Bachelor's degree in Business
                Administration
                <br /> and I'm also a MERN Stack Developer Certified from Route
                IT Training Center "
              </p>
              <div className="m-5">
                <a target="_blank" href={cv}>
                  <button className="btn btn-info Download">
                    Download My CV <FaCloudDownloadAlt size={30} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
