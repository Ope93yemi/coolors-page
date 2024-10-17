import PropTypes from "prop-types";
import { useState } from "react";
import "./Card.css"; // Import card styles

const Card = ({ image, text, description, hoverText, hoverBgColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      style={{ backgroundColor: isHovered ? hoverBgColor : "aliceblue" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-content">
        {!isHovered ? (
          <>
            <div className="card-image">{image}</div>
            <h3 className="card-title">{text}</h3>
            <p className="card-description">{description}</p>
          </>
        ) : (
          <div className="card-hover-content">
            <p>{hoverText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  description: PropTypes.any,
  hoverBgColor: PropTypes.any,
  hoverText: PropTypes.any,
  image: PropTypes.any,
  text: PropTypes.any,
};

export default Card;
