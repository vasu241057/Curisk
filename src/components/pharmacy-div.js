import React, { useEffect, useState, Component } from "react";
import Slider from "react-slick";
import "./pharmacy-div.css";
import { Link } from "react-router-dom";

export default function Pharmacy() {
  return (
    <>
      <div className="pharmacy-div">
        <div className="pharmacy-image"></div>
        <div className="pharmacy-text-box">
          <div className="pharmacy-store-name">
            <h3 className="pharmacy-store-text1"> New Amman Medicals</h3>
            <p className="pharmacy-store-text2">2km away</p>
          </div>
          <div className="rating-review">
            <div className="rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M6.35871 0.622878C6.29132 0.486343 6.15227 0.399902 6.00001 0.399902C5.84775 0.399902 5.7087 0.486343 5.64132 0.622878L4.00381 3.94087L0.342528 4.47255C0.191845 4.49443 0.0666533 4.59997 0.0195947 4.74477C-0.0274638 4.88958 0.0117729 5.04855 0.120806 5.15483L2.77021 7.73738L2.1446 11.3844C2.11886 11.5345 2.18055 11.6861 2.30373 11.7756C2.42691 11.8651 2.59022 11.8769 2.72499 11.8061L6.00001 10.0842L9.27503 11.8061C9.4098 11.8769 9.57311 11.8651 9.69629 11.7756C9.81947 11.6861 9.88116 11.5345 9.85542 11.3844L9.22981 7.73738L11.8792 5.15483C11.9882 5.04855 12.0275 4.88958 11.9804 4.74477C11.9334 4.59997 11.8082 4.49443 11.6575 4.47255L7.99621 3.94087L6.35871 0.622878Z"
                  fill="#E09F1F"
                />
              </svg>
              <p>4.5</p>
            </div>
            <p>17 reviews</p>
          </div>
        </div>
      </div>
    </>
  );
}
