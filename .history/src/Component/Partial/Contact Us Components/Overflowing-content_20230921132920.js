/** @format */

import React from "react";
import Queryform from "./query-form";

const OverflowingContent = () => {
  const [ response , setResponse ]

  return (
    <div className="contact-us-overflow-main contact-us-overflow-main-2 ">
      <div className="Content">
        <div className="Main" style={{ justifyContent: "center" }}>
          <h5 style={{ color: "#000" }}>Lorem Ipsum</h5>
        </div>
        <div
          className="Main"
          style={{ justifyContent: "center", marginTop: "0" }}
        >
          <p
            style={{
              justifyContent: "center",
              marginTop: "0",
              textAlign: "justify",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
            eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
            pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur
            id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum
            bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam
            nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus
            lacus. Proin nisi dolor, posuere mattis viverra vel, dignissim et
            augue. Suspendisse convallis nec neque et tincidunt. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae;{" "}
          </p>
        </div>
        <div
          className="Main"
          style={{ justifyContent: "center", marginTop: "0" }}
        >
          <h5 style={{ color: "#000" }}>Our Office(s) </h5>
        </div>

        <div className="Courses_Section" style={{ justifyContent: "center" }}>
          <div className="Item" >
            <div className="Image-cont">
              <img src="./Image/17.png" alt="" />
              <p>London</p>
            </div>

            <div className="three-sec" style={{ justifyContent: "center" }}>
              <i className="fa-solid fa-phone" style={{ color: "#000" }} />
              <p style={{ color: "#000" }}>+91 9824324456</p>
            </div>
            <div className="three-sec" style={{ justifyContent: "center" }}>
              <i className="fa-solid fa-envelope" style={{ color: "#000" }} />
              <p style={{ color: "#000" }}>support@company.com</p>
            </div>
            <div className="three-sec" style={{ justifyContent: "center" }}>
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "#000" }}
              />
              <p style={{ color: "#000" }}>22nd Avenue Street, UK</p>
            </div>
          </div>
        </div>

        <Queryform />
      </div>
    </div>
  );
};

export default OverflowingContent;