import React from "react";

const Garl = ({ tour }) => {
  return (
    <div className="garelly-container">
      <div className="gallery">
        {tour.images.map((image) => (
          <img
            src={image}
            style={{ width: "500px" }}
            style={{ height: "250px" }}
          />
        ))}
      </div>
    </div>
  );
};
export default Garl;
