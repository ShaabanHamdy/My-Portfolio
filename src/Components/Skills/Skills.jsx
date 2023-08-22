import React from "react";
import "./skills.css";
import jquery from "../images/jquery-icon.png";
import redux from "../images/redux-icon.png";
import gitHub from "../images/github.png";
import mongo from "../images/mongo.png";
import graphQl from "../images/GraphQ.png";
import typescript from "../images/typescript-icon.png";
import nextJs from "../images/next.png";

const Skills = () => {
  return (
    <>
    <div className="my-5 p-2">
    <div id="SKILLS" className="mt-5 text-center">
        <h2 className="Skills">Skills</h2>
      </div>
      <div className="rowAll">
        <div className="row m-5">
          <div className="col-md-2">
            <div className="   text-center">
              <i className="iconsSize fab fa-html5 text-warning"></i>
              <p className="ps-2">HTML</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="   text-center">
              <i className="iconsSize fab fa-css3-alt text-info"></i>
              <p>CSS</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="   text-center">
              <i className="iconsSize fab fa-bootstrap text-success"></i>
              <p>Bootstrap</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="   text-center">
              <i className="iconsSize fab fa-js text-warning"></i>
              <p>Js</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="   text-center">
              <img className="imageIcon" src={jquery} alt="" />
              <p>jQuery</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="   text-center">
              <img className="imageIcon" src={gitHub} alt="" />
              <p>Github</p>
            </div>
            {/* SiTypescript */}
          </div>
          <div className="col-md-2">
            <div className="   text-center">
              <i className="iconsSize fab fa-react text-info"></i>
              <p>React js</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="   text-center">
            <img className="imageIcon" src={typescript} alt="" />
              <p>TypeScript</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="   text-center">
            <img className="imageIcon" src={nextJs} alt="" />
              <p>Next.js</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="   text-center">
              <i className="iconsSize fab fa-sass text-warning"></i>
              <p className="">Sass</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="   text-center">
              <i className="iconsSize  fab fa-node text-success"></i>
              <p>Node js</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="   text-center">
              <img className="imageIcon" src={redux} alt="" />
              <p>Redux</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="   text-center">
              <img className="imageIcon" src={graphQl} alt="" />
              <p>GraphQL</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="   text-center">
              <img className="imageIcon" src={mongo} alt="" />
              <p>Mongo DB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;
