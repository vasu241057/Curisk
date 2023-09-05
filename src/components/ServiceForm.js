import Property1Group18 from "./Property1Group18";
import "./ServiceForm.css";
const ServiceForm = () => {
  return (
    <div className="frame10">
      <div className="frame11">
        <div className="frame-inner1">
          <div className="services-parent">
            <b className="services">Services</b>
            <img className="group-icon" alt="" src="/group-75.svg" />
            <img className="image-1-icon" alt="" src="/image-1@2x.png" />
          </div>
        </div>
      </div>
      <Property1Group18
        property1Group18MarginTop="-12px"
        rectangleDivBackgroundColor="#eee"
        onlineAndOfflineContainerTop="12.24%"
        onlineAndOfflineContainerFontSize="16px"
        onlineAndOfflineContainerDisplay="flex"
        onlineAndOfflineContainerAlignItems="flex-end"
      />
    </div>
  );
};

export default ServiceForm;
