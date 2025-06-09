import { InputProps } from "./input.types";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

import styles from "./input.module.scss";

const Input = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <div className={styles.container}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <SearchIcon className={styles.icon} />
    </div>
  );
};

export default Input;
