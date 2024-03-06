const Button = ({
  extraClass,
  text,
  bgColor,
  textColor = "black",
  small = false,
  ...propStyle
}) => {
  return (
    <button
      className={`px-${small ? 2 : 4} py-2 rounded-full text-bas ${extraClass}`}
      style={{ background: bgColor, color: textColor, ...propStyle }}
    >
      {text}
    </button>
  );
};

export default Button;
