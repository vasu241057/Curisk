import { useMemo } from "react";
import "./Property1Group18.css";
import { Link } from "react-router-dom";
const Property1Group18 = ({
  property1Group18MarginTop,
  rectangleDivBackgroundColor,
  onlineAndOfflineContainerTop,
  onlineAndOfflineContainerFontSize,
  onlineAndOfflineContainerDisplay,
  onlineAndOfflineContainerAlignItems,
}) => {
  const property1Group18Style = useMemo(() => {
    return {
      marginTop: property1Group18MarginTop,
    };
  }, [property1Group18MarginTop]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const onlineAndOfflineContainerStyle = useMemo(() => {
    return {
      top: onlineAndOfflineContainerTop,
      fontSize: onlineAndOfflineContainerFontSize,
      display: onlineAndOfflineContainerDisplay,
      alignItems: onlineAndOfflineContainerAlignItems,
    };
  }, [
    onlineAndOfflineContainerTop,
    onlineAndOfflineContainerFontSize,
    onlineAndOfflineContainerDisplay,
    onlineAndOfflineContainerAlignItems,
  ]);

  return (
    <div className="property-1group-18" style={property1Group18Style}>
      <div className="property-1group-18-child" />
      <div className="property-1group-18-item" style={rectangleDivStyle} />
      <div
        className="online-and-offline-container"
        style={onlineAndOfflineContainerStyle}
      >
        Online and Offline Consultations
      </div>
      <img className="pngwing-1-icon" alt="" src="/pngwing-1@2x.png" />
      <Link to="/upload">
        <div className="book-now-wrapper">
          <div className="book-now">Book Now</div>
        </div>
      </Link>
    </div>
  );
};

export default Property1Group18;
