import React from "react";
import Countdown from "../images/Countdown.png";
import noxMove from "../images/noxe.png";
import notes from "../images/notes.png";
import CRUD from "../images/CRUD SYSTEM .png";
import Yummy from "../images/Yummy.png";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div id="PROJECTS" className="row gy-4 my-5">
        <div className="text-center my-5 ">
          <h2 className="Project">Projects</h2>
        </div>

        <div className="col-md-4 col-Project">
          <div className="mainCard  w-75" style={{ width: "30rem" }}>
            <div className="imgDiv">
              <img className="imgProject w-100" src={Countdown} />
            </div>
            <div className="textBody">
              <div className="btnDiv">
                <a
                  target="_blank"
                  href="https://github.com/ShaabanHamdy/Countdown-to-New-Year-2024"
                >
                  <button className="btn btn-info mx-5">Github</button>
                </a>
                <a
                  target="_blank"
                  href="https://shaabanhamdy.github.io/Countdown-to-New-Year-2024/"
                >
                  <button className="btn btn-info">Live Demo</button>
                </a>
              </div>
            </div>
            <div className="p-2 text-center des">
              <h2 className=" fw-bold">Countdown project</h2>
              <p className=" fw-bold">
                countdown with days and hours and minutes and seconds to new
                year 2024. <br /> using: HTML - CSS - Bootstrap - Js - jQuery
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-Project">
          <div className="mainCard  w-75" style={{ width: "30rem" }}>
            <div className="imgDiv">
              <img className="imgProject w-100" src={noxMove} />
            </div>
            <div className="textBody">
              <div className="btnDiv">
                <a
                  target="_blank"
                  href="https://github.com/ShaabanHamdy/noxe-react-shaaban-hamdy"
                >
                  <button className="btn btn-info mx-5">Github</button>
                </a>
                <a
                  target="_blank"
                  href="https://noxe-react-igz4a6cr2-shaabanhamdy.vercel.app/"
                >
                  <button className="btn btn-info">Live Demo</button>
                </a>
              </div>
            </div>
            <div className="p-2 text-center des">
              <h2 className=" fw-bold">Noxe Movies</h2>
              <p className=" fw-bold">

                noxe movies like netflix using in this project MERN Stack
                [MongoDb - Express js - React js - Node js ] and Sass -
                Bootstrap
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-Project">
          <div className="mainCard  w-75" style={{ width: "30rem" }}>
            <div className="imgDiv">
              <img className="imgProject w-100" src={CRUD} />
            </div>
            <div className="textBody">
              <div className="btnDiv">
                <a
                  target="_blank"
                  href="https://github.com/ShaabanHamdy/Crud-System-with-Js"
                >
                  <button className="btn btn-info mx-5">Github</button>
                </a>
                <a
                  target="_blank"
                  href="https://shaabanhamdy.github.io/Crud-System-with-Js/"
                >
                  <button className="btn btn-info">Live Demo</button>
                </a>
              </div>
            </div>
            <div className="p-2 text-center des">
              <h2 className=" fw-bold">CRUD SYSTEM </h2>
              <p className=" fw-bold">
                {" "}
                You can add products with any count you need and also can delete
                one item or all and can also update any product want to update
                it. using [ html - css - js - Bootstrap]
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-Project">
          <div className="mainCard  w-75" style={{ width: "30rem" }}>
            <div className="imgDiv">
              <img className="imgProject w-100" src={Yummy} />
            </div>
            <div className="textBody">
              <div className="btnDiv">
                <a
                  target="_blank"
                  href="https://github.com/ShaabanHamdy/restaurants-food"
                >
                  <button className="btn btn-info mx-5">Github</button>
                </a>
                <a
                  target="_blank"
                  href="https://shaban-hamdy-restaurants-food.vercel.app/"
                >
                  <button className="btn btn-info">Live Demo</button>
                </a>
              </div>
            </div>
            <div className="p-2 text-center des">
              <h2 className=" fw-bold">Yummy food  </h2>
              <p className=" fw-bold">
                {" "}
                Yummy food project  search about food around the world  using [ HTML - CSS - JS - jQuery -  Bootstrap  - APIS ]
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-Project">
          <div className="mainCard  w-75" style={{ width: "30rem" }}>
            <div className="imgDiv">
              <img className="imgProject w-100" src={notes} />
            </div>
            <div className="textBody">
              <div className="btnDiv">
                <a
                  target="_blank"
                  href="https://github.com/ShaabanHamdy/react-notes"
                >
                  <button className="btn btn-info mx-5">Github</button>
                </a>
                <a
                  target="_blank"
                  href="https://shaban-hamdy-react-notes.vercel.app/#/"
                >
                  <button className="btn btn-info">Live Demo</button>
                </a>
              </div>
            </div>
            <div className="p-2 text-center des">
              <h2 className=" fw-bold">Notes </h2>
              <p className=" fw-bold">
                {" "}
                to do list project CRUD  with MERN Stack  using [ MondoDB - Express.js - React.js - Node.js - Redux - Bootstrap ]
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
