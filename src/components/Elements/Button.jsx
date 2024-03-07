const Button = ({
  extraClass,
  text,
  bgColor,
  textColor = "black",
  small = false,
  leftIcon = null,
  ...propStyle
}) => {
  return (
    <button
      className={`flex px-${
        small ? 2 : 4
      } py-2 rounded-full text-bas ${extraClass}`}
      style={{ background: bgColor, color: textColor, ...propStyle }}
    >
      {!!leftIcon && leftIcon}
      {text}
    </button>
  );
};

export default Button;
