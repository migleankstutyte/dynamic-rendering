import { ButtonProps } from "./button.type";

import styles from "./button.module.scss";

const Button = ({
  children,
  onClick,
  color = "primary",
  variant = "contained",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[`button__${color}--${variant}`]}`}
    >
      {children}
    </button>
  );
};

export default Button;
