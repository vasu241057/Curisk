import FormContainer2 from "../components/FormContainer2";
import "./UserLogin.css";
import { Waveform } from "@uiball/loaders";

import { useEffect, useState } from "react";

const UserLogin = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1100);
  }, []);

  return isLoading ? (
    <div className="Loader-div">
      <Waveform size={40} lineWeight={3.5} speed={0.8} color="black" />
    </div>
  ) : (
    <div className="user-login">
      {/* <img className="status-bar-icon" alt="" src="/status-bar.svg" /> */}
      <div className="frame6">
        <div className="nav-field">
          <img className="base-icon" alt="" src="/base1.svg" />
          <div className="logo">
            <div className="key">
              <b>Lou</b>
              <span className="bank">Bank</span>
            </div>
            <img className="logo-child" alt="" src="/vector-97.svg" />
          </div>
          <b className="title1">Login</b>
          <div className="left-side-icons">
            <div className="icon-avatar" />
          </div>
          <img
            className="image-22-08-23-at-10-1"
            alt=""
            src="/image-220823-at-10-1@2x.png"
          />
        </div>
        <div className="frame7">
          <div className="title-group">
            <img className="title-icon" alt="" src="/title.svg" />
            <img
              className="please-fill-out-the-below-deta"
              alt=""
              src="/please-fill-out-the-below-details-to-login-your-account.svg"
            />
          </div>
          <FormContainer2 />
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
