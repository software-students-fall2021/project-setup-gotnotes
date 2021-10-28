import "./styles.scss";
const Button = ({ color, text, onClick }) => {
  return (
    <button
      className="Button"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "grey",
  text: "Button"
};
export default Button;
