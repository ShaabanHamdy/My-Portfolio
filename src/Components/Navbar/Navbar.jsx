import React, { useEffect, useRef } from "react";
import style from "./navbar.module.css";

const Navbar = () => {
  const headerRef = useRef();
  const topRef = useRef();
  // =================================================================================
  const navHeader = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "rgb(1, 1, 31)";
        headerRef.current.style.padding = "0px";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "40px 0px";
      }
    });
  };
  //  =========================================================================================
  const btnTop = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 795) {
        topRef.current.style.opacity = "1";
      } else {
        topRef.current.style.opacity = "0";
      }
    });
  };
  //  =========================================================================================

  useEffect(() => {
    navHeader();
    btnTop();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg fs-4  ">
        <div
          ref={headerRef}
          className={`container-fluid ${style.header} transition-all `}
        >
          <a
            className="navbar-brand text-warning fs-1 fw-bold mx-5 px-5 "
            href="#HOME"
          >
            sHaaBan
          </a>
          <button
            className={`${style.navbarToggler} navbar-toggler`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto me-5">
              <li className="nav-item">
                <a
                  className={`nav-link active ${style.NavLink}`}
                  aria-current="page"
                  href="#ABOUT"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link active ${style.NavLink}`}
                  aria-current="page"
                  href="#SKILLS"
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link active ${style.NavLink}`}
                  aria-current="page"
                  href="#PROJECTS"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link active ${style.NavLink}`}
                  aria-current="page"
                  href="#CONTACTS"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div ref={topRef} className={style.btnTop}>
        <a href="#HOME">
          <i className="fas fa-arrow-up fs-2 text-white border border-1 rounded-5  p-2"></i>
        </a>
      </div>
    </>
  );
};

export default Navbar;
