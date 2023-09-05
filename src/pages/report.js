import "./report.css";
import Slider from "react-slick";
import Caution from "../components/caution";
import { Link } from "react-router-dom";
import { Waveform } from "@uiball/loaders";
import { useEffect, useState } from "react";

export default function Report() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1100);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };

  {
    /* <Waveform size={40} lineWeight={3.5} speed={1} color="black" /> */
  }
  return isLoading ? (
    <div className="Loader-div">
      <Waveform size={40} lineWeight={3.5} speed={0.8} color="black" />
    </div>
  ) : (
    <>
      <div className="main-divr">
        <div className="outer-div1-report">
          <div className="name-icon">
            <div className="name">
              <h2 className="welcome">Welome</h2>
              <h1 className="username">Abhimanyu Mathur</h1>
            </div>
            <div className="icon-adim"></div>
          </div>
          <div className="age-gender">
            <div className="age-gender-subdiv">
              <p>Age</p>
              <p>38 Years</p>
            </div>
            <div className="age-gender-subdiv">
              <p>Gender</p>
              <p>Male</p>
            </div>
            <div className="age-gender-subdiv">
              <p>User ID</p>
              <p>3356635915</p>
            </div>
          </div>
        </div>
        <div className="analysis-div">
          <div className="analysis-main">
            <h1 className="dr-pintu">Dr. Pintu’s analysis is ready! </h1>
            <p className="analysis-texts">
              Get vital information in an intuitive way required for better
              health & lifestyle of patients.
            </p>
            <div className="doctor-image"></div>
          </div>
        </div>
        <div className="caution-main">
          <h2 className="caution-header"> Words of Caution</h2>
          <Slider {...settings}>
            <Caution />
            <Caution />
            <Caution />
            <Caution />
            <Caution />
            <Caution />
          </Slider>
        </div>
        <div className="pdf">
          <Link to="">
            <div className="pdf-heading">
              <div className="pdf-head-image"> </div>
              <p className="pdf-head-text">Your health report</p>
            </div>
            <div className="pdf-main">
              <div className="pdf-centre">
                <div className="pdf-image"></div>
              </div>
              <div className="pdf-centre">
                <p className="pdf-name">Abhimanyu.pdf</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
