import PropTypes from "prop-types";
const Button = ({ text, textColor, bgColor }) => {
  return (
    <button
      className={` rounded shadow-sm px-8 py-2 mx-2 text-center border border-['#8C9AAD'] border-solid`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
};

Button.defaultProps = {
  textColor: "#373737",
  bgColor: "#004AAC",
};

export default Button;
