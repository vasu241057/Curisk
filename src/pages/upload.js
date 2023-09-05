import React, { useEffect, useState, Component } from "react";
import Slider from "react-slick";
import "./upload.css";
import { Link } from "react-router-dom";
import Pharmacy from "../components/pharmacy-div";
import { Waveform } from "@uiball/loaders";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

export default function Upload() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1100);
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("Selected file:", file.name);
      // You can perform further actions with the selected file, such as uploading it.
    }
  };

  const [fileInputVisible, setFileInputVisible] = useState(false);

  const handleDivClick = () => {
    setFileInputVisible(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return isLoading ? (
    <div className="Loader-div">
      <Waveform size={40} lineWeight={3.5} speed={0.8} color="black" />
    </div>
  ) : (
    <>
      <div className="main-div">
        <div className="outer-div1">
          <div className="header-back-text">
            <Link to="/home" className="back-icon1">
              {/* <img src="./../Assets/arrow-left.jpg" alt="back-arrow" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.91421 6.99996L6.06066 3.85352L5.35355 3.14641L1 7.49996L5.35355 11.8535L6.06066 11.1464L2.91421 7.99996L14.2071 7.99996V6.99996L2.91421 6.99996Z"
                  fill="#0E1012"
                  stroke="#0E1012"
                  stroke-width="0.5"
                />
              </svg>
            </Link>
            <h2> Upload Medical History </h2>
          </div>
          <div className="report-text">
            <p className="ai-report-desc">
              Receive AI-analyzed summarized medical report by email in 1 hour,
              also available in your Profile Page.
            </p>
          </div>
          <div className="upload-box-outer">
            <div className="upload-box">
              <div
                className="upload-box-real"
                onClick={() => document.getElementById("file-input").click()}
              >
                <input
                  type="file"
                  className="input"
                  id="file-input"
                  accept="image/*,.pdf"
                  style={{ display: "none" }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M12.8182 3L18.1364 7.90909M12.8182 3L7.90909 7.90909M12.8182 3V18.5455M22.6364 12V22.6364H3V12"
                    stroke="#E09F1F"
                    stroke-width="1.5"
                  />
                </svg>{" "}
              </div>
            </div>
          </div>
          <div className="button-outer">
            <Link to="/home">
              <button className="button-upload"> Continue</button>
            </Link>
          </div>
        </div>
        <div className="outer-div-bottom">
          <div>
            <h2 className="Pharmacy-heading">Pharmacy Nearby</h2>
            <Slider {...settings}>
              <Pharmacy />
              <Pharmacy />
              <Pharmacy />
              <Pharmacy />
              <Pharmacy />
              <Pharmacy />
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
