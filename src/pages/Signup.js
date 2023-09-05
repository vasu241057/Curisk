import { useCallback, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import EmailForm from "../components/EmailForm";
import PasswordInputContainer from "../components/PasswordInputContainer";
import LouBankContainer from "../components/LouBankContainer";
import "./Signup.css";
import SignUp from "../components/SignUp-component";
import { Waveform } from "@uiball/loaders";
const Signup = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const onLabelTextClick = useCallback(() => {
    navigate("/user-login");
  }, [navigate]);

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
    <div className="signup">
      <img
        className="image-22-08-23-at-10-1"
        alt=""
        src="/image-220823-at-10-1@2x.png"
        style={{
          position: "relative",
          position: "absolute",
          top: "50px",
          left: "120px",
        }}
      />
      <div className="title-parent">
        <div className="title">Create new account</div>
        <div className="please-fill-out">
          Please fill out the below details to create your new account.
        </div>
      </div>

      <div className="label" onClick={onLabelTextClick}>
        <span>Already have an account!</span>
        <Link to="/user-login">
          <span className="login"> Login</span>
        </Link>
      </div>
      <SignUp className="Mui-vasu" />
    </div>
  );
};

export default Signup;
