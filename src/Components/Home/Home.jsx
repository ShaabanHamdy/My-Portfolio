import React from "react";
import Typed from "react-typed";
import style from  "./home.module.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-12 both">
            <div className={style.images}></div>
            <div className={style.content}>

              <div className=" text-center">
              <h1 className="fw-bolder">
                <span className={style.Hello} >!Hello, </span> I'm{" "}
                <span className="text-warning shaban-hamdy"> sHaaBan HaMdy</span>
              </h1>
              </div>
              <h3 className="text-center lh-lg">
                <Typed
                  className=""
                  loop
                  strings={[
                    `I'm a MERN Stack developer`,
                    "Using  MongoDB",
                    "Using Express",
                    "Using React js",
                    "Using Node js",
                  ]}
                  typeSpeed={150}
                />
              </h3>
              <div className={style.divIcons}>
                <a
                  className=" text-white"
                  target="_blanket"
                  href="https://www.facebook.com/shabanhamdy24/"
                >
                  <i className={` fab fa-facebook ${style.icon}`}></i>
                </a>
                <a
                  className=" text-white"
                  target="_blanket"
                  href="https://github.com/ShaabanHamdy"
                >
                  <i className={` fab fa-github ${style.icon}`}></i>
                </a>
                <a
                  className=" text-white"
                  target="_blanket"
                  href="https://www.linkedin.com/in/shaban-hamdy/"
                >
                  <i className={` fab fa-linkedin ${style.icon}`}></i>
                </a>
                <a
                  className=" text-white"
                  target="_blanket"
                  href="https://www.instagram.com/shaaban.97/"
                >
                  <i className={` fab fa-instagram ${style.icon}`}></i>
                </a>
                <a
                  className=" text-white"
                  target="_blanket"
                  href="https://twitter.com/SHIiKO1397"
                >
                  <i className={` fab fa-twitter ${style.icon}`}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
