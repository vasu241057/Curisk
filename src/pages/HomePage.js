import { useCallback, useState, useEffect } from "react";
import HelloCardContainer from "../components/HelloCardContainer";
import ServiceForm from "../components/ServiceForm";
import UpcomingAppointmentsScheduleCo from "../components/UpcomingAppointmentsScheduleCo";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { TextField } from "@mui/material";
import { Waveform } from "@uiball/loaders";
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const onFrameContainer31Click = useCallback(() => {
    navigate("/");
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
    <div className="home-page">
      <div className="frame"></div>

      <HelloCardContainer />
      <TextField
        className="Textfield"
        sx={{ width: 319 }}
        color="primary"
        variant="outlined"
        type="search"
        label="Search"
        size="medium"
        margin="none"
      />

      <ServiceForm />
      <img className="frame-icon" alt="" src="/frame.svg" />
      <UpcomingAppointmentsScheduleCo />
      <div className="frame-group">
        <div
          className="essentials-home-parent"
          onClick={onFrameContainer31Click}
        >
          <img className="essentials-home" alt="" src="/essentials--home.svg" />
          <div className="home">Home</div>
        </div>
        <div className="event-note-black-24dp-1-parent">
          <img
            className="search-1-icon"
            alt=""
            src="/event-note-black-24dp-1.svg"
          />
          <div className="home">Schedule</div>
        </div>
        <div className="event-note-black-24dp-1-parent">
          <img className="search-1-icon" alt="" src="/report1.svg" />
          <div className="home">Report</div>
        </div>
        <div className="event-note-black-24dp-1-parent">
          <img
            className="essentials-home"
            alt=""
            src="/essentials--clock.svg"
          />
          <div className="home">Milestones</div>
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="frame-item" />
        <div className="frame-child" />
        <div className="frame-item" />
        <div className="frame-child" />
      </div>
    </div>
  );
};

export default HomePage;
