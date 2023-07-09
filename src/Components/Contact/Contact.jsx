import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./Contact.css";
import Joi from "joi";
const Contact = () => {
  //=================================== useState for set names value from user use name of input
  const [user, setUser] = useState({
    "user_name": "",
    "user_email": "",
    "user_number": "",
    "user_subject": "",
    "user_message": "",
  });
  const getInputValue = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };
  const [errFrontMessage, setErrFrontMessage] = useState([]);
  //========================= validation form data
  const validateFormData = () => {
    const schema = Joi.object({
      user_name: Joi.string().required(),
      user_email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),

        user_number: Joi.string().required(),
      user_message: Joi.string().min(3).required(),
      user_subject: Joi.string().required()
    });
    return schema.validate(user, { abortEarly: false });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const validationResponse = validateFormData();
    if (validationResponse.error) {
      setErrFrontMessage(validationResponse.error?.details);
    }
     else {
      setErrFrontMessage([])
      //-----------------------------------------------------------------------------------------
      emailjs
        .sendForm(
          "service_rfb1r5o",
          "template_rs1y8q5",
          e.target,
          "d6ZX234o1blsg1MP0"
        )
        .then(
          (result) => {
            if (result.text) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sent email  ",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          },
          (error) => {
            // console.log(error.text);
          }
        );
      e.target.reset();
    }
  };
//================================================
  //===================================================== function show  FrontEnd messages
  const showErrFrontMag = (parameters) => {
    if (errFrontMessage?.length) {
      let x = errFrontMessage.filter((err) =>
        err?.message.includes(parameters)
      );

      if (x[0] !== undefined) {
        return <div className="alert bg-danger  p-1 mt-2">{x[0].message}</div>;
      }
    }
  };
//======================================================================================
return (
    <>

      <div id="CONTACTS" className="row  mt-5 pt-5 gy-5">
        <div className=" text-center">
          <h2 className="ContactMe">Contact Me</h2>
        </div>
        <div className="col-md-12  contactCol">
          <form className="contact-Form" onSubmit={sendEmail}>
            <div>
              <label>Name</label>
              <input
              onChange={getInputValue}
                type="text"
                name="user_name"
                className="form-control my-2"
              ></input>
            </div>
            { showErrFrontMag("user_name")}
            <div>
              <label>Email</label>
              <input
              onChange={getInputValue}
                type="email"
                name="user_email"
                className="form-control my-2"
              ></input>
            </div>
            {showErrFrontMag("user_email")}
            <div>
              <label>Phone Number</label>
              <input
              onChange={getInputValue}
                type="number"
                name="user_number"
                className="form-control my-2"
                ></input>
            </div>
                {showErrFrontMag("user_number")}
            <div>
              <label>Subject</label>
              <input
              onChange={getInputValue}
                type="text"
                name="user_subject"
                className="form-control my-2"
                ></input>
            </div>
                {showErrFrontMag("user_subject")}
            <div>
              <label>Message</label>
              <textarea
          
              onChange={getInputValue}
                className=" form-control"
                name="user_message"
                id=""
                cols="40"
                rows="5"
                ></textarea>
            </div>
                {showErrFrontMag("user_message")}
            <div className="mt-5 float-end">
              <button className="btn btn-info">Send</button>
            </div>
            <div className="clearfix"></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
