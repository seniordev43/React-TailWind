const Button = ({
  extraClass,
  text,
  bgColor,
  textColor = "black",
  small = false,
  leftIcon = null,
  opacity = 90,
  ...propStyle
}) => {
  return (
    <button
      className={`flex px-${
        small ? 2 : 4
      } opacity-${opacity} py-2 rounded-full text-bas ${extraClass}`}
      style={{ background: bgColor, color: textColor, ...propStyle }}
    >
      {!!leftIcon && leftIcon}
      {text}
    </button>
  );
};

export default Button;
