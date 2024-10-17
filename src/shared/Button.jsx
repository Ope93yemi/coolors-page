import PropTypes from "prop-types";
import './Button.css'; // Ensure the path is correct based on your folder structure

const Button = ({ 
  bgColor = '#0073ff', 
  text = 'Click me', 
  children, 
  borderRadius = '8px', 
  width = 'auto', 
  height = 'auto',
  className = ''
}) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    border: `1px solid ${bgColor}`, // Border matches background color
    borderRadius: borderRadius,
    width: width,
    height: height,
  };

  return (
    <button className={`custom-button ${className}`} style={buttonStyle}>
      {children || text} {/* Display children if passed, else display the text */}
    </button>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string,
  borderRadius: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  height: PropTypes.string,
  text: PropTypes.string,
  width: PropTypes.string
};

export default Button;
