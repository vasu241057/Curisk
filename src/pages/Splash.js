import "./Splash.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Waveform } from "@uiball/loaders";

const Splash = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1100);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  const onAnimationEnd = () => {
    // Navigate to homepage after animation is complete
    window.location.href = "/user-login";
  };

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/user-login");
    }, 4300);
  }, []);
  return isLoading ? (
    <div className="Loader-div">
      <Waveform size={40} lineWeight={3.5} speed={0.8} color="black" />
    </div>
  ) : (
    <div
      className={`splash-page ${showAnimation ? "animate" : ""}`}
      onAnimationEnd={onAnimationEnd}
    >
      <img
        className="image-22-08-23-at-10-11"
        alt=""
        src="/image-220823-at-10-11@2x.png"
      />
      <b className="wellness-at-your">Wellness At Your Fingertips</b>
    </div>
  );
};

export default Splash;
