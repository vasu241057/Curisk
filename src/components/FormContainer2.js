import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FormContainer2.css";
import SignIn from "./SignIn";
const FormContainer2 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onButtonImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="frame21">
      {/* <img className="icon4" alt="" src="/.svg" />
      <img
        className="rectangle-2-stroke"
        alt=""
        src="/rectangle-2-stroke.svg"
      /> */}
      {<SignIn />}
      <div className="input-group">
        {/* <div className="input4">
          <div className="base7">
            <img className="base-icon5" alt="" src="/base2.svg" />
            <div className="captainabhimanyugmailcom">
              CaptainAbhimanyu@gmail.com
            </div>
          </div>
          <img className="icon5" alt="" src="/icon.svg" />
          <img className="label-icon" alt="" src="/label.svg" />
        </div> */}
        {/* <img className="input-icon" alt="" src="/input.svg" /> */}
      </div>
      {/* <img
        className="button-icon"
        alt=""
        src="/button.svg"
        onClick={onButtonImageClick}
        data-animate-on-scroll
      /> */}
      <img className="vector-98-stroke" alt="" src="/vector-98-stroke.svg" />
      {/* <img className="frame-child2" alt="" src="/rectangle-3.svg" /> */}
      <img className="frame-child3" alt="" src="/group-2.svg" />
      <img className="label-icon1" alt="" src="/label1.svg" />
      <img className="label-icon2" alt="" src="/label2.svg" />
      <img className="label-icon3" alt="" src="/label3.svg" />
    </div>
  );
};

export default FormContainer2;
